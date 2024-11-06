// // src/components/Count.tsx
// import { RootState } from "@reduxjs/toolkit/query";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { increment } from "./redux/features/slice";

// export const Count: React.FC = () => {
//   const counter = useSelector((state: RootState) => state.counter);
//   const dispatch = useDispatch();

//   const counterUp = () => {
//     dispatch(increment());
//   };

//   return (
//     <>
//       <h1>{counter}</h1>
//       <button onClick={counterUp}>counter up</button>
//     </>
//   );
// };
