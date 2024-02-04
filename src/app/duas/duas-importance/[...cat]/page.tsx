/* eslint-disable @next/next/no-img-element */
import getCategory from "@/lib/getCategory";
import getDua from "@/lib/getDua";
import React from "react";

const DuaHome = async (props: any) => {
  const idString = props.params.cat[0].toString().slice(4, 5);
  const id = parseInt(idString);
  const duaList = await getDua(id);
  const data = await duaList;

  return (
    <div>
      {data.data.result[0].dua.map((dua: any, index: number) => (
        <DuaCard key={index} props={dua} />
      ))}
    </div>
  );
};

export default DuaHome;

function DuaCard({ props }: any) {
  return (
    <>
      {/* <div
        id="sec_1"
        className="flex undefined mb-5 flex-row bg-white rounded-2lg px-5 py-4 justify-start items-center dark:bg-dark-bg"
      >
        <p className="text-title font-medium leading-[25px] dark:text-dark-text text-mss style-Kalpurush ">
          <span className="text-green-500  font-medium leading-[25px] text-mss style-Kalpurush">
            Section:
          </span>
          The servant is dependent on his Lord
        </p>
      </div> */}
      <div className=" bg-white rounded-2lg mb-5 dark:bg-dark-bg">
        <div className="p-6">
          <div className="flex flex-row  justify-start items-center ">
            <img
              src="https://duaruqyah.com/assets/duacard.svg"
              alt="duacard"
              className="mr-3"
            />
            <p className="text-green-500 font-medium ">{props.dua_name_en}</p>
          </div>
          <div className="w-full">
            <p
              className=" style-inter dark:text-[#e4e4e4] mt-5 text-justify leading-8 font-normal p-2 "
              style={{ fontSize: "18px" }}
            >
              <span>{props.top_en}</span>
            </p>
            <p
              dir="rtl"
              className="dark:text-[#e4e4e4] my-8 text-right leading-loose text-3xl"
              style={{ wordSpacing: "8px", fontSize: "26px" }}
            >
              <p>{props.dua_indopak}</p>
            </p>
            {props.transliteration_en && (
              <>
                <p
                  className="style-Kalpurush style-inter dark:text-[#e4e4e4] my-5 text-justify leading-8 italic"
                  style={{ fontSize: "18px" }}
                >
                  <span
                    id="transliteration"
                    className=" style-inter-dua-title font-medium"
                    style={{ fontSize: "18px" }}
                  >
                    Transliteration:
                  </span>
                  <span>{props.transliteration_en}</span>
                </p>
              </>
            )}
            {props.translation_en && (
              <>
                <p
                  id="translation"
                  className="style-Kalpurush style-inter dark:text-[#e4e4e4] my-5 text-title text-justify font-normal"
                  style={{ fontSize: "18px" }}
                >
                  <span
                    className="style-Kalpurush style-Kalpurush-dua-title style-inter-dua-title font-medium"
                    style={{ fontSize: "18px" }}
                  >
                    Translation:
                  </span>{" "}
                  <span>{props.translation_en}</span>
                </p>
              </>
            )}
          </div>

          <div>
            <p
              className="mt-5  font-normal text-green-500"
              style={{ fontSize: "18px" }}
            >
              Reference:
            </p>
            <div
              className="mt-1  font-normal dark:text-dark-text"
              style={{ fontSize: "18px" }}
            >
              <span> Surah Al-Fatir 35:15</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between px-6">
          <div></div>
          <div>
            <div className="flex items-center flex-row justify-between py-6 gap-x-8 xs:gap-x-6">
              <div id="copy" className="relative w-6">
                <img
                  className="cursor-pointer"
                  src="https://duaruqyah.com/assets/others/copy.svg"
                  alt="copy"
                />
              </div>
              <div id="bookmark" className="relative w-6">
                <img
                  className="cursor-pointer"
                  src="https://duaruqyah.com/assets/others/bookmark.svg"
                  alt="bookmark"
                />
              </div>
              <div id="plan" className="relative w-6">
                <img
                  className="cursor-pointer"
                  src="https://duaruqyah.com/assets/others/plan.svg"
                  alt="plan"
                />
              </div>
              <div id="share" className="relative w-6">
                <img
                  className="cursor-pointer"
                  src="https://duaruqyah.com/assets/others/share.svg"
                  alt="share"
                />
              </div>
              <div id="report" className="relative w-6">
                <img
                  className="cursor-pointer"
                  src="https://duaruqyah.com/assets/others/report.svg"
                  alt="report"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const categoreyData = getCategory();
  const category = await categoreyData;
  const data = category.data;

  return data.result.map((category: any) => {
    cat: category.cat_id.toString();
  });
}
