import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nature = () => {
  return (
    <>
      <div className="relative h-[100vh]">
        <div className="flex flex-col md:flex-row h-full relative z-10">
          <div className="flex md:w-1/2 lg:w-2/5">
            <Image
              src="/Images/home/NatureGreen.png"
              height={3000}
              width={4152}
              alt="Nature Image"
              className="w-full h-[100vh] object-cover"
            />
          </div>
          <div className="z-50 hidden md:flex flex-col bg-[#01191B] md:w-1/2 lg:w-3/5 md:justify-end xl:justify-center pb-20 items-end text-right pr-8 lg:pr-12">
            <div className="text-xl md:text-2xl font-semibold text-[#C67F54]">
              TRAVEL & ENJOY
            </div>
            <div className="text-lg font-semibold">Travelling Moment</div>
            <div className="flex md:w-[300px] text-[#C8EAEE] text-md pt-3">
              The most beautiful in the world is, of course, the world itself.
            </div>
            <div className="flex flex-row gap-4 mt-8">
              <Link
                href="/where"
                className="py-2 md:py-3 px-5 md:px-8 bg-[#C67F54] hover:scale-95"
              >
                Explore
              </Link>
              <Link
                href="/where"
                className="py-2 md:py-3 px-5 md:px-8 border border-[#C67F54] hover:scale-95"
              >
                Share yours
              </Link>
            </div>
          </div>
        </div>
        <div className="px-6 lg:p-0 flex flex-col absolute top-20 lg:right-[62vw] z-30 justify-end lg:items-end lg:text-right">
          <div className="flex text-xl md:text-2xl font-semibold text-[#C67F54]">
            BREATH IN THE FRESH AIR
          </div>
          <div className="flex max-w-[300px] sm:w-[300px] text-[#C8EAEE] text-md pt-3">
            Life is a beautiful journey that is meant to be embraced to the
            fullest every day.
          </div>
        </div>
        <div className="flex md:hidden flex-col absolute top-60 pl-6 right-6 z-30 text-right items-end">
          <div className="text-xl md:text-2xl font-semibold text-[#C67F54]">
            TRAVEL & ENJOY
          </div>
          <div className="text-lg font-semibold">Travelling Moment</div>
          <div className="flex w-[300px] text-[#C8EAEE] text-md pt-3">
            The most beautiful in the world is, of course, the world itself.
          </div>
          <div className="flex flex-row gap-4 mt-8">
            <div className="py-2 sm:py-3 px-6 sm:px-8 bg-[#C67F54]">
              Explore
            </div>
            <div className="py-2 sm:py-3 px-6 sm:px-8 border border-[#C67F54]">
              See More
            </div>
          </div>
        </div>

        <div className="z-10 absolute bottom-0 left-[25%] sm:left-1/2 lg:-ml-[10vw] transform -translate-x-1/2 w-[120vw] sm:w-[650px] md:w-[98vw] lg:w-[800px] xl:w-[900px] ">
          <Image
            src="/Images/home/woman_edited.png"
            width={900}
            height={600}
            alt="Woman Image"
            className="aspect-auto object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Nature;
