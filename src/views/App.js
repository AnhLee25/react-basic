// import logo from "./logo.svg";
import "./App.scss";
// import MyComponent from "./example/MyComponent";
// import NavBar from "./nav/NavBar";
// import Home from "./home/Home";
// import TicTacToe from "./tic-tac-toe/TicTacToe";
// import { Route, BrowserRouter, Routes } from "react-router-dom";
import HookPractice from "./hook-tutorial/HookPractice";
import HookUseReducer from "./hook-tutorial/HookUseReducer";
import { useState } from "react";
import HookUseContext from "./hook-tutorial/HookUseContext";
/*
JSX -> return block
2 components: 
- class components -> dùng render(){}
- function component (function, arrow) -> dùng return
 */

function App() {
  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <NavBar />

    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>Hello React</p>
    //       <Routes>
    //         <Route path="/home" element={<Home />} />
    //         <Route path="/friends" element={<MyComponent />} />
    //         <Route path="/game" element={<TicTacToe />} />
    //       </Routes>
    //     </header>

    //     <footer></footer>
    //   </div>
    // </BrowserRouter>
    <HookUseContext />
  );
}

export default App;
