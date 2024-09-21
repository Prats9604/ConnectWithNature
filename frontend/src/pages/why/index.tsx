import React from "react";
import Image from "next/image";
import Header from "@/Components/Header";

const Why = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col bg-[#012527] pt-20 pb-10 md:pb-26  px-4 sm:px-8 md:px-10 lg:px-20 gap-16 md:gap-20">
        <div>
          {/* <div className="text-[#fff]">Why</div> */}
          There are tons of benefits that come with taking some time to wander
          the great outdoors as you travel!
          <span className="text-[#16858B]">
            Here's why you should consider connecting with nature when planning
            your next trip.
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="md:relative md:w-[55vw] md:pr-4 pt-18">
            <div className="md:sticky md:top-64">
              <Image
                src="/Images/why/WhyHero.png"
                height={3276.8}
                width={2185.6}
                alt="Nature Image"
                className="pt-18 aspect-auto object-cover self-center"
              />
            </div>
          </div>

          <div className="flex flex-col md:w-[65vw] px-6 sm:px-10 lg:px-14 py-10 gap-8 bg-[#012E30] text-[#C8EAEE]">
            <div>
              These days,
              <span className="text-[#16858B]">
                exploring the great outdoors
              </span>{" "}
              isn't always a priority when travelers are adding adventures to
              their ever-growing bucket lists. Technology has spread throughout
              the world, making it hard to catch someone without a smartphone in
              their hand.
            </div>
            <div>
              Over time, we have developed a shorter attention span and are
              often in search of instant gratification when it comes to
              entertaining ourselves. If going outside and hiking two miles
              fails to capture the imagination, we might decide to opt out and
              instead do something more engaging on our travels.
            </div>
            <div>
              Health and science experts have determined that{" "}
              <span className="text-[#16858B]">
                deepening our connection to nature is extremely important for
                boosting our overall health, mood, and mental clarity.
              </span>{" "}
              After all, we weren't meant to seclude ourselves indoors, staring
              at white walls for most of our days!
            </div>
            <div>
              There are{" "}
              <span className="text-[#16858B]">
                endless benefits to spending time outdoors
              </span>
              , and doing so is the perfect escape from the busy urban world we
              can get caught up in. If you're an avid traveler, being outside
              and taking the time to connect with nature is a welcome respite
              from hustling between sightseeing spots. It gives you time to
              recharge, soak up some sun, and restore your energy.
            </div>
            <div>
              Not the most outdoorsy person? You're in luck! You don't need to
              spend a week roughing it in the depths of the wilderness in order
              to reap the{" "}
              <span className="text-[#16858B]">
                benefits of connecting with nature.
              </span>
            </div>
            <div>
              Taking a break to go on a nice walk through your local park or a
              nearby forested area can do wonders. Think of it as your daily
              vitamin dose of greenery. In fact, the more you{" "}
              <span className="text-[#16858B]">
                immerse yourself in the outdoors
              </span>
              , the more benefits you will be able to enjoy! Venture off the
              beaten path with friends or family for extended periods of time
              and you're sure to have a fun-filled trip that will leave you
              feeling refreshed.
            </div>
            <div>
              The world is full of spectacular natural wonders that can both
              fascinate and educate, so what are you waiting for? Whether it's
              participating in an ecological program with World packers,
              practicing mindfulness outside, or learning a new outdoor skill,
              there are numerous ways to{" "}
              <span className="text-[#16858B]">
                connect with nature as you travel!
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
