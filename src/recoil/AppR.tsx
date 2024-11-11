import React from 'react';
import { useRecoilState } from 'recoil';
import { countState } from './atoms';

const AppR: React.FC = () => {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div className="flex flex-col justify-center items-center gap-y-8 pt-10">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}
        className="px-6 py-2 bg-slate-100 rounded-md"
        >Increment</button>
      <button onClick={() => setCount(count - 1)}
        className="px-6 py-2 bg-slate-100 rounded-md"
        >Decrement</button>
    </div>
  );
};

export default AppR;
