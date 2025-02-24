import { useContext, useReducer } from "react";
import { CounterContext } from "../../context";

function reducerFn(state, action) {
  if (action.type == "PLUS") {
    return {
      counter: state.counter + action.payload,
    };
  }
  if (action.type === "MINUS") {
    return {
      counter: state.counter - action.payload,
    };
  }
  return {
    counter: 0,
  };
}

export const Counter = () => {
    const context = useContext(CounterContext);

    


  function plus() {
  context.inc();
  }
  function minus() {
  context.dec()
  }
  return (
    <div>
      <button onClick={plus}>+</button>
      <h1>{context.counter}</h1>
      <button onClick={minus}>-</button>
    </div>
  );
};