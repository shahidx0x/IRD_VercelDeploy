import { Search } from "lucide-react";
import React from "react";

const Topbar = () => {
  return (
    <div>
      <div>
        <div className="flex flex-row justify-between">
          <div className="text-left flex items-center">
            <div className="">
              <h1 className="text-3xl font-medium dark:text-dark-text">
                Duas Page
              </h1>
              <p className="text-sm text-mute-grey-200 dark:text-dark-text"></p>
            </div>
          </div>
          <div className="flex flex-row items-center relative">
            <form className="sm-max:w-full" action="">
              <div className="w-96 lg:mr-10">
                <div className="flex justify-between sm-max:flex-col sm-max:gap-4 w-full">
                  <input
                    id="search_box"
                    className=" bg-white placeholder:text-mute-grey   block placeholder: placeholder:text-sm  sm-max:bg-gray-200 md:bg-gray-100 lg:bg-white w-full rounded-s-md  py-3 px-4 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1  sm:text-sm sm-max:dark:bg-dark-bg-lite md:dark:bg-dark-bg-dark dark:bg-dark-bg dark:placeholder:opacity-[.6] lg:dark:bg-dark-bg-dark"
                    placeholder="Search by Dua Name"
                    type="text"
                    name="search"
                    value=""
                  />
                  <button
                    type="submit"
                    className="flex items-center rounded-e-md  justify-center bg-gray-100 dark:bg-dark-bg-dark md-min:dark:hover:text-gray-400 dark:text-gray-500 cursor-pointer md-minhover:bg-gray-200 hover:text-gray-500 text-gray-400 px-4 py-[9px]  md-min:absolute right-1 top-1 sm-max:bg-primary md:bg-white md:dark:bg-dark-bg-lite lg:bg-white lg:dark:bg-dark-bg-lite sm-max:focus:bg-green-700"
                  >
                    <span className="flex items-center sm-max:hidden">
                      <Search />
                    </span>
                    <p className="hidden sm-max:block sm-max:text-white">
                      Search
                    </p>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
