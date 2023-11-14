import { useReducer } from "react";
const initState = 0;

const UP_ACTION = "up";
const DOWN_ACTION = "down";
// Purpose: Centralize and modulize state, logic to update state
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

function HookUseReducer() {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>Increase</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Decrease</button>
    </div>
  );
}

export default HookUseReducer;
