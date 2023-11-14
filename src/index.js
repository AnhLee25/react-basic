import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import "./styles/global.scss";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  ThemeContext,
  ThemeProvider,
} from "./views/hook-tutorial/ThemeContext";
const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
]);
// function emitMessage(id) {
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`lesson ${id}`, { detail: `Comment on lesson ${id}` })
//     );
//   }, 2000);
// }
// emitMessage(1);
// emitMessage(2);
// emitMessage(3);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
