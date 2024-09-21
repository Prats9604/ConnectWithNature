import React from "react";
import Image from "next/image";
import Link from "next/link";

const How = () => {
  return (
    <div className="flex flex-col md:flex-row mt-[510px] sm:mt-[700px] md:mt-20 lg:mt-40 bg-[#012527]">
      <Image
        src="/Images/how/HowLeft.png"
        height={3100}
        width={2491.94}
        alt="Nature Image"
        className="w-[80vw] md:w-[40vw] self-start aspect-auto object-cover "
      />
      <div className="flex flex-col gap-2 px-8 py-12 md:py-0 md:px-10 justify-center ">
        <div className="flex text-xl md:text-2xl font-semibold text-[#C67F54]">
          CONNECTING WITH NATURE AS YOU TRAVEL
        </div>
        <div className="max-w-[400px] text-md md:text-lg text-[#C8EAEE] text-md">
          Integrate the great outdoors into your travel itinerary and connect
          with nature
        </div>
        <Link
          href="/where"
          className="py-3 w-[120px] bg-[#1C3F43] text-center my-8 hover:scale-95"
        >
          How
        </Link>
      </div>
      <div className="flex flex-col justify-between">
        <Image
          src="/Images/how/HowRightTop.png"
          height={1156}
          width={1156}
          alt="Nature Image"
          className="hidden md:flex md:w-[200px] aspect-auto object-cover self-center"
        />
        <Image
          src="/Images/how/HowRightbot.png"
          height={1156}
          width={1156}
          alt="Nature Image"
          className="w-[200px] md:w-[300px] self-end aspect-auto object-cover"
        />
      </div>
    </div>
  );
};

export default How;
