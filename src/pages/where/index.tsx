import React from "react";
import Image from "next/image";
import Header from "@/Components/Header";
import Link from "next/link";

const destinationsConfig = [
  {
    src: [
      "/Images/where/place1.png",
      "/Images/where/place2.png",
      "/Images/where/place3.png",
      "/Images/where/place3.png",
      "/Images/where/place3.png",
    ],
    name: "Halong Bay",
    description: "City in Vietnam",
    contributor: "Patrick Richard",
  },
  {
    src: [
      "/Images/where/place1.png",
      "/Images/where/place2.png",
      "/Images/where/place3.png",
      "/Images/where/place3.png",
    ],
    name: "Ha Long Bay",
    description: "Bay in Vietnam",
    contributor: "John Doe",
  },
  {
    src: [
      "/Images/where/place1.png",
      "/Images/where/place2.png",
      "/Images/where/place3.png",
      "/Images/where/place3.png",
      "/Images/where/place3.png",
    ],
    name: "Phu Quoc Island",
    description: "Island in Vietnam",
    contributor: "Jane Smith",
  },
];

const Where = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col bg-[#012527] pt-20 pb-10 md:pb-26 px-4 sm:px-8 md:px-10 lg:px-20 gap-16 md:gap-20">
        <div className="p-8 flex flex-col md:flex-row bg-[#012E30] justify-between gap-8 md:gap-12 xl:gap-20 items-center">
          <div className="flex flex-col gap-2">
            <div className="text-[#C67F54] font-semibold">
              Join Us and Share Your Adventures with the World!
            </div>
            <div>
              Discover breathtaking destinations and share your own travel
              stories. Create an account to inspire others by posting your
              favorite nature spots, along with photos and descriptions. Let's
              explore together!
            </div>
          </div>
          <div className="flex items-start w-[100%] md:w-auto">
            <Link
              href="/where"
              className="flex h-[46px] text-xl w-[120px] bg-[#C67F54] text-center hover:scale-95 items-center justify-center"
            >
              Join Us
            </Link>
          </div>
        </div>

        {/* Mapping the destinationsConfig */}
        {destinationsConfig.map((destination, index) => (
          <div key={index} className="bg-[#012E30] py-6 flex flex-col gap-6">
            <div className="flex flex-row gap-6 pl-6 overflow-x-auto no-s">
              {destination.src.map((src, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={src}
                  height={238}
                  width={310}
                  alt={`Image ${imgIndex + 1} of ${destination.name}`}
                  className="aspect-auto object-cover self-center rounded-md"
                />
              ))}
            </div>
            <div className="flex flex-row justify-between items-center px-10">
              <div className="flex flex-col gap-1">
                <div className="text-lg md:text-xl font-semibold">
                  {destination.name}
                </div>
                <div className="text-[#C67F54] text-base md:text-xl">
                  {destination.description}
                </div>
                <div className="sm:hidden text-[#C8EAEE] text-base md:text-lg">
                  ~{destination.contributor}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="justify-end">
                  <Image
                    src="/Images/home/like.png"
                    height={40}
                    width={40}
                    alt="Like"
                    className=""
                  />
                </div>
                <div className="hidden sm:flex text-[#C8EAEE] text-base md:text-lg">
                  ~{destination.contributor}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Where;
