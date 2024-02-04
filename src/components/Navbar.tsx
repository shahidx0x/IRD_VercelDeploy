/* eslint-disable @next/next/no-img-element */

import { Search } from "lucide-react";
import React from "react";
import CategoryCard from "./CategoryCard";
import getCategory from "@/lib/getCategory";

const Navbar = async () => {
  const categoreyData = getCategory();
  const category = await categoreyData;
  const data = category.data;
  console.log(data);

  return (
    <div>
      <div className=" mt-14 w-[350px] rounded-xl bg-white">
        <div className=" w-[350px] rounded-t-2lg bg-[rgb(31,164,91)] rounded-t-md  justify-center items-center h-14 flex flex-row px-5">
          <p className="text-base text-white mx-auto">Categories</p>
        </div>
        <div className="mx-3 pt-4">
          <label className="relative block w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <Search />
            </span>
            <input
              id="filerted_catList"
              className="h-12 w-full placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-white rounded-md pl-12 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1  
        sm:text-sm dark:bg-dark-bg-dark dark:border-none dark:placeholder:text-[#96a2b4]"
              placeholder="Search Categories"
              type="text"
              name="search"
            />
          </label>
        </div>
        <div
          className='h-[calc(100vh_-_30.5vh)] 3xl:h-[68vh]"
               scrl-cat pb-8  mb-4 overflow-hidden'
        >
          <div>
            {data?.result.map((cat: object, index: number) => (
              <CategoryCard key={index} props={cat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
