import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { decrement, increment } from "./reducer";
const AppP: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  return (
    <div className="flex flex-col justify-center items-center gap-y-8 pt-10">
      <h1>Count: {count}</h1>
      <button
        onClick={() => dispatch(increment())}
        className="px-6 py-2 bg-slate-100 rounded-md"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="px-6 py-2 bg-slate-100 rounded-md"
      >
        Decrement
      </button>
    </div>
  );
};

export default AppP;
