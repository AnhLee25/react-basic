import { useContext } from "react";
import Content from "./Content";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
function HookUseContext() {
  const context = useContext(ThemeContext);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={context.changeTheme}>
        Change to {context.theme === "dark" ? "light" : "dark"}
      </button>
      <Content />
    </div>
  );
}
export default HookUseContext;
