import React from "react";

export const Navbar: React.FC = () => {
  return (
    <section className=" w-full h-[20hw] bg-gray-700 flex justify-between items-center px-40 py-6">
      <div>
        <h2 className="text-white font-semibold text-xl">Movies</h2>
      </div>
      <div>
        <input
          type="search"
          placeholder="Search a movie..."
          className=" w-[30vw] px-2 py-1.5 rounded-md"
        />
      </div>
    </section>
  );
};
