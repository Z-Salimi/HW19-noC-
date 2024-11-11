import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { fetchData } from './action';

const AppT: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {loading && <p className='w-full bg-yellow-200 p-4'>Loading...</p>}
      {error && <p className='w-full bg-red-200 p-4'>Error: {error}</p>}
      <div className='flex flex-col items-center justify-center gap-4 pt-10 px-4'>
        {data.map((item: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
          <p key={index} className='py-2 px-2 w-full h-[6vh] bg-slate-100 rounded-md'>{item.title}</p>
        ))}
      </div>
    </div>
  );
};

export default AppT;
