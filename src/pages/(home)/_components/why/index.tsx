import React from "react";
import Image from "next/image";
import Link from "next/link";

const Why = () => {
  return (
    <>
      <div className="relative flex flex-col md:flex-row h-[100vh]">
        <div className="flex flex-col px-8 gap-8 sm:px-10 md:gap-0 md:justify-between md:w-3/5 bg-[#012527] md:pl-20 lg:pl-36 md:pr-10 pt-20">
          <div>
            <div className="flex text-xl md:text-2xl font-semibold text-[#C67F54]">
              DIVE INTO NATURE
            </div>
            <div className="max-w-[400px] text-md md:text-lg text-[#C8EAEE] text-md pt-3">
              Health and science experts have determined that{" "}
              <span className="text-[#1E4E54]">
                deepening our connection to nature is extremely important for
                boosting our overall health, mood, and mental clarity.
              </span>
            </div>
          </div>
          <Image
            src="/Images/why/WhyHero.png"
            height={3276.8}
            width={2185.6}
            alt="Nature Image"
            className="md:w-[80%] aspect-auto object-cover md:hidden"
          />
          <Link href="/why" className="py-3 w-[120px] bg-[#1C3F43] text-center mb-8 hover:scale-95">
            Why
          </Link>
        </div>

        <div className="flex flex-col gap-8 md:gap-0 px-8 sm:px-10 md:px-0 md:w-2/5 bg-[#1C3F43] md:justify-between pt-12">
          <Image
            src="/Images/why/WhyHero2.png"
            height={3276.8}
            width={2185.6}
            alt="Nature Image"
            className="md:w-[70%] aspect-auto object-cover self-center"
          />
          <div className="flex flex-col md:pr-2 lg:pr-8 gap-1 text-md self-end justify-end md:w-[65%] lg:w-[60%]">
            <div className="text-[#C8EAEE]">
              There are tons of benefits that come with taking some time to
              wander the great outdoors as you travel
            </div>
            <div className="text-md text-[#375F63] pb-4">
              These days, exploring the great outdoors isn't always a priority
              when travelers are adding adventures to their ever-growing bucket
              lists. Technology has spread throughout the world, making it hard
              to catch someone without a smartphone in their hand.
            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden md:flex justify-center md:-mt-80 lg:-mt-80 xl:-mt-80">
        <Image
          src="/Images/why/WhyHero.png"
          height={3276.8}
          width={2185.6}
          alt="Nature Image"
          className="w-[45%] aspect-auto object-cover"
        />
      </div>
    </>
  );
};

export default Why;
