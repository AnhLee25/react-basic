import {
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import HookCallback from "./HookCallback";
const tabs = ["posts", "comments"];
const lessons = [
  { id: 1, name: "Lesson 1" },
  { id: 2, name: "Lesson 2" },
  { id: 3, name: "Lesson 3" },
];

function Content({ triggerShow }) {
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [countdown, setCountdown] = useState(10);
  //   useEffect -> dependency
  useEffect(() => {
    console.log();
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, [type]);
  const hanldeTabs = (tab) => {
    setType(tab);
  };

  // useEffect -> DOM event
  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);
    console.log("addEventListener");
    // Clean up function
    return () => {
      console.log("unmount...");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   useEffect(() => {
  //     const timeoutId = setTimeout(() => {
  //       if (countdown === 0) {
  //         setCountdown(0);
  //         triggerShow(true);
  //       } else {
  //         setCountdown(countdown - 1);
  //       }
  //     }, 1000);

  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }, [countdown]);

  const handleGoToTop = () => {};
  return (
    <div>
      <h1>{countdown}</h1>
      <PreviewImage />
      {tabs.map((tab) => (
        <button
          onClick={() => hanldeTabs(tab)}
          style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
        >
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
      {showGoToTop && (
        <button
          style={{ position: "fixed", right: 20, bottom: 20 }}
          onClick={() => handleGoToTop}
        >
          Go to top
        </button>
      )}
    </div>
  );
}
function PreviewImage() {
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  const handlePreviewImage = (event) => {
    const file = event.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  return (
    <div>
      <input type="file" onChange={handlePreviewImage} />
      {avatar && <img src={avatar.preview} alt="" width="25%" />}
    </div>
  );
}

function FakeChat() {
  const [lessonId, setLessonId] = useState(1);
  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };

    window.addEventListener(`lesson ${lessonId}`, handleComment);
    return () => {
      window.removeEventListener(`lesson ${lessonId}`, handleComment);
    };
  }, [lessonId]);

  return (
    <div>
      <ul>
        {lessons.map((lesson) => {
          return (
            <li
              key={lesson.id}
              style={{
                color: lessonId === lesson.id ? "orange" : "#333",
              }}
              onClick={() => setLessonId(lesson.id)}
            >
              {lesson.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
/* useEffect(func, deps)
1. Update State
2. Update DOM
3. Re-render UI
4. Call clean-up func if deps change
5. Evoke callback func

   useLayoutEffect(func, deps)
1. Update State
2. Update DOM
3. Call clean-up func if deps change
4. Evoke callback func
5. Re-render UI 
*/
function UseLayoutEffectTest() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);
  const handleAdd = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

function UseRefTest() {
  const [count, setCount] = useState(10);
  const timerId = useRef();
  const prevCount = useRef();
  const h1Ref = useRef();
  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  useEffect(() => {
    const rect = h1Ref.current;
    console.log(rect);
  });

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    console.log("Start ->", timerId.current);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
    console.log("Stop ->", timerId.current);
  };
  return (
    <div>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

function UseMemoTest() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const nameRef = useRef();

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("Tính toán lại...");
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);

  const handleAddProduct = () => {
    setProducts([...products, { name, price: +price }]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };

  const handleChangeProductName = (e) => {
    setName(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div>
      <input
        value={name}
        placeholder="Product"
        onChange={handleChangeProductName}
        ref={nameRef}
      ></input>
      <input
        value={price}
        placeholder="Price"
        onChange={handleChangePrice}
      ></input>
      <button onClick={handleAddProduct}>Add</button>
      <br />
      <span>
        Total: {total}
        {products.map((product, index) => {
          return (
            <li key={index}>
              {product.name}-{product.price}
            </li>
          );
        })}
      </span>
    </div>
  );
}

function HookPractice() {
  const [counter, setCounter] = useState(1);
  const [show, setShow] = useState(false);
  const handleIncrease = useCallback(() => {
    setCounter((prevCount) => prevCount + 1);
  }, []);
  const handleShow = (show) => {
    setShow(!show);
  };

  return (
    <div className="Test" style={{ padding: 100 }}>
      <h1>{counter}</h1>
      <button onClick={() => handleShow(show)}>{show ? "Hide" : "Show"}</button>
      {/* {show && <Content triggerShow={handleShow} />} */}
      {show && <HookCallback onIncrease={handleIncrease} />}
      {show && <UseMemoTest />}
    </div>
  );
}
export default HookPractice;
