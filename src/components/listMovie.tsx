
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { Movie } from "./movie";
import { MovieActions } from "../redux/features/movie.slice";

export const ListMovies = () => {
  const dispatch = useAppDispatch();
  const movieList = useAppSelector((state) => state.movieList.list);

  const sortName = () => {
    dispatch(MovieActions.sortName());
  };
  const sortGenre = () => {
    dispatch(MovieActions.sortGenre());
  };
  const sortScore = () => {
    dispatch(MovieActions.sortScore());
  };
  console.log(movieList);

  return (
    <div className="flex justify-center items-start mt-10 px-28">
      <table className="w-full text-sm text-center shadow-md">
        <thead className="text-[16px] text-gray-700 uppercase bg-slate-400 ">
          <tr>
            <th className="px-6 py-3 cursor-pointer" onClick={sortName}>
              Name{" "}
            </th>
            <th className="px-6 py-3 border-x-2 border-gray-300 cursor-pointer" onClick={sortGenre}>Genre </th>
            <th className="px-6 py-3 border-x-2 border-gray-300 cursor-pointer" onClick={sortScore}>Score </th>
            <th className="px-6 py-3 ">Action </th>
          </tr>
        </thead>
        <tbody>
          {movieList.map((item) => (
            <Movie key={item.id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
