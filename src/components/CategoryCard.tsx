/* eslint-disable @next/next/no-img-element */
"use client";
import { image_src } from "@/constant/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Subcategory from "./SubCategory";

export default function CategoryCard({ props }: any) {
  const path = usePathname();
  const [currentId, setCurrentId] = React.useState(props?.cat_id);
  const [visiable, setVisiable] = React.useState(false);
  const activePath = path === `/duas/duas-importance/cat-${currentId}`;
  const handleClick = () => {
    setCurrentId(props?.cat_id);
    setVisiable(!visiable);
  };

  return (
    <>
      <div
        className={
          activePath
            ? "group scroll-mt-4  bg-gray-100   pb-1 pt-1 rounded-lg "
            : "group scroll-mt-4  hover:bg-gray-100  pb-1 pt-1 hover:rounded-lg "
        }
        id="cat_1"
        onClick={() => handleClick()}
      >
        <Link href={`/duas/duas-importance/cat-${props?.cat_id}`}>
          <div className="cursor-pointer  flex justify-between items-center mx-3 dark:bg-transparent my-2">
            <div className="  flex flex-row gap-x-4 items-center w-full h-18 px-3 rounded-xl group-hover:bg-icon-bg dark:group-hover:bg-dark-bg-dark">
              <div className="flex flex-row w-70 items-center xs:w-full sm:w-full md:w-full">
                <div className="bg-gray-200   flex rounded-lg items-center h-14 w-14 xs:w-12 xs:h-12">
                  <img
                    src={`${image_src}/${props?.cat_icon}.svg`}
                    alt="duar_gurutto"
                    className="p-3"
                  />
                </div>
                <div className="w-40 text-left ml-2 ">
                  <p className="text-base  style-kalpurush text-black style-inter-cat dark:text-dark-text sm:text-mss">
                    {props?.cat_name_en}
                  </p>
                  <p className="text-gray-400   text-xs mt-1 dark:text-dark-text xs:text-[11px] ">
                    Subcategory: {props?.no_of_subcat}
                  </p>
                </div>
              </div>
              <div className="flex flex-row w-12 items-center">
                <div className="bg-devider w-0.1 mr-3 h-12 dark:hidden"></div>
                <div className="flex flex-col gap-y-1 justify-center items-center">
                  <p className="text-base dark:text-dark-text xs:text-sm sm:text-mss">
                    {props?.no_of_dua}
                  </p>
                  <p className="text-gray-400 text-xs dark:text-dark-text xs:text-[11px]">
                    Duas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="ml-12 border-l-2 border-dotted my-2 border-green-500">
        <div
          className={
            !visiable
              ? "hidden"
              : "flex border-dotted flex-col justify-start items-start gap-y-2 ml-3 "
          }
        >
          {props?.sub_category?.map((subcat: object, index: number) => (
            <Subcategory key={index} props={subcat} />
          ))}
        </div>
      </div>
    </>
  );
}
