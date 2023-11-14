import { memo } from "react";
function HookCallback({ onIncrease }) {
  console.log("Child re-render");
  return (
    <div>
      <button onClick={onIncrease}>Plus</button>
      <h1>Test useCallback React</h1>
    </div>
  );
}
export default memo(HookCallback);
