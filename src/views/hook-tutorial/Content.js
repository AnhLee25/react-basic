import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./HookCss.css";
function Content() {
  const context = useContext(ThemeContext);
  return (
    <p className={context.theme}>This is a text sample to test Context;</p>
  );
}
export default Content;
