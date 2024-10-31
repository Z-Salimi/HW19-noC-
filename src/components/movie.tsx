import React from "react";
import { IMovieList } from "../types/type";
import { useAppDispatch } from "../redux/hook";
import { MovieActions } from "../redux/features/movie.slice";

export const Movie:React.FC<IMovieList> = ({id, name,genre,score}) => {
    const dispatch = useAppDispatch();

    const remove =()=>{
        dispatch(MovieActions.removeMovie(id));
    }
    
    return (
        
            <tr className="border-b-2 border-gray-300">
              <td className="px-6 py-2 ">{name}</td>
              <td className="px-6 py-2 border-x-2 border-gray-300">{genre}</td>
              <td className="px-6 py-2 border-x-2 border-gray-300">{score}</td>
              <td className="px-6 py-2">
                <button
                onClick={remove}
                className="bg-red-600 px-6 py-1.5 rounded-md text-white ">
                  Delete
                </button>
              </td>
            </tr>
         
    );
  };
  