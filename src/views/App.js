import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/MyComponent";
/*
JSX -> return block
2 components: 
- class components -> dùng render(){}
- function component (function, arrow) -> dùng return
 */
// const App = () =>{}
function App() {
  // JSX
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello bro</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
