/* eslint-disable @next/next/no-img-element */
"use client";
import { log } from "console";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function Subcategory({ props }: any) {
  const [visiable, setVisiable] = React.useState(false);
  const pathname = usePathname();
  const link = `/duas/duas-importance/cat-1&sub-cat-${props.subcat_id}`;

  return (
    <>
      <div className="flex flex-row my-2">
        <div className="bg-green-500 -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
        <div className="flex flex-col justify-start items-start">
          <Link href={link}>
            <p
              onClick={() => setVisiable(!visiable)}
              className={
                link === pathname
                  ? "text-green-500 cursor-pointer font-sans font-semibold text-left text-sm dark:text-dark-text xs:text-2xs"
                  : " cursor-pointer font-sans font-semibold text-left text-sm dark:text-dark-text xs:text-2xs"
              }
            >
              {props?.subcat_name_en}
            </p>
          </Link>

          {visiable && (
            <>
              <div>
                {props.dua.map((dua_name: object, index: number) => (
                  <SubCatDua
                    key={index}
                    props={dua_name}
                    link={link}
                    index={index + 1}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

function SubCatDua({ props, link, index }: any) {
  const sublink = `${link}&dua-${index}`;
  const pathname = usePathname();
  return (
    <>
      <div className="mt-2 cursor-pointer">
        <Link href={sublink}>
          <div className="flex flex-row ">
            <img
              src="https://duaruqyah.com/assets/duaarrow.svg"
              className="-translate-y-1 mr-2"
              alt="dua"
            />
            <p
              className={
                sublink === pathname
                  ? "text-green-500 text-xs  my-3 text-left w-[95%] dark:text-gray-300"
                  : " text-xs text-gray-500 my-3 text-left w-[95%] dark:text-gray-300"
              }
            >
              {props.dua_name_en}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
