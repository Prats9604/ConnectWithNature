import React from "react";
import Image from "next/image";
import Header from "@/Components/Header";

const How = () => {
  return (
    <>
    <Header/>
      <div className="flex flex-col bg-[#012527] py-20 px-4 sm:px-8 md:px-10 lg:px-20 gap-24 md:gap-36">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col bg-[#012E30] h-1/2 md:w-1/2 p-4 sm:p-8 lg:p-10 xl:p-20 pt-10 gap-4">
            <div className="text-[#C67F54] text-xl font-semibold">
              Do something simple and fun
            </div>
            <div className="flex flex-col gap-8 text-md text-[#E6F2F3]">
              <div>
                Remember, you don't have to plan a complicated camping trip in
                order to have an enriching experience in nature! Make plans to
                experience the outdoors without commuting several hours, and
                instead search for something easy to enjoy outside that meshes
                well with your schedule.
              </div>
              <div>
                Even if you're right in the heart of a busy metropolis, every
                area has something to offer when it comes to connecting with
                nature activities. What do you consider enjoyable? Factor that
                into choosing your outdoor activity, and see what's doable!
              </div>
              <div>
                If you know there are hiking trails nearby, go out and do some
                exploring! Bring your family, a friend, or an excited pet to
                keep you company, or choose to have a solo adventure. Either way
                you will be making good use of the landscape around you, even if
                you're simply sitting in your garden admiring the plants you
                worked so hard to nurture.
              </div>
            </div>
          </div>
          <div className="flex flex-col h-1/2 md:w-1/2 md:h-[90vh] px-4 md:pl-10 md:pr-0 lg:pl-20 lg:pr-0 md:justify-between md:items-end gap-4 md:gap-0">
            <div className="flex flex-col gap-2 text-[#75492E] text-lg font-semibold pt-10 md:items-end">
              <div>Choose to stay somewhere scenic</div>
              <div>
                <Image
                  src="/Images/how/ArrowNext.png"
                  height={524}
                  width={524}
                  alt="Arrow"
                  className="w-[40px] sm:w-[60px]"
                />
              </div>
            </div>
            <Image
              src="/Images/how/How1.png"
              height={1140}
              width={760}
              alt="Nature Image"
              className="aspect-auto object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse">
          <div className="flex flex-col bg-[#012E30] h-1/2 md:w-1/2 p-4 sm:p-8 lg:p-10 xl:p-20 pt-10 gap-4">
            <div className="text-[#C67F54] text-xl font-semibold">
              Choose to stay somewhere scenic
            </div>
            <div className="flex flex-col gap-8 text-md text-[#E6F2F3]">
              <div>
                If you're looking to have a more profound relationship with
                nature, make sure your accommodation of choice includes an
                amazing view! Nowadays, there are so many ways to find unique
                accommodation anywhere that it's easy to access alternative,
                outdoor-friendly accommodation. Go glamping, find a cabin rental
                tucked away in the woods or a small beach house overlooking the
                ocean.
              </div>
              <div>
                With so much open space and peaceful scenery wherever you look,
                it will be easier to keep nature on the brain. This type of
                environment will encourage you to slow down as you travel and
                will ultimately give you more patience as you tackle each new
                day.
              </div>
              <div>
                Embracing nature through your accommodation choices enhances
                your travel experience and fosters a deeper connection to the
                environment. Waking up to birds chirping or waves crashing
                creates a sense of tranquility that's rare in daily life. Such
                serene settings inspire mindfulness, reduce stress, and promote
                well-being, allowing you to fully immerse yourself in the
                natural beauty around you.
              </div>
            </div>
          </div>
          <div className="flex flex-col h-1/2 md:w-1/2 md:h-[90vh] px-4 md:pr-10 md:pl-0 lg:pr-20 lg:pl-0 md:justify-between gap-4 md:gap-0">
            <div className="flex flex-col gap-2 text-[#75492E] text-lg font-semibold pt-10 ">
              <div>Participate in a Worldpackers ecological program</div>
              <div>
                <Image
                  src="/Images/how/ArrowNext.png"
                  height={524}
                  width={524}
                  alt="Arrow"
                  className="w-[40px] sm:w-[60px]"
                />
              </div>
            </div>
            <Image
              src="/Images/how/How2.png"
              height={1140}
              width={760}
              alt="Nature Image"
              className="aspect-auto object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col bg-[#012E30] h-1/2 md:w-1/2 p-4 sm:p-8 lg:p-10 xl:p-20 pt-10 gap-4">
            <div className="text-[#C67F54] text-xl font-semibold">
              Participate in a Worldpackers ecological program
            </div>
            <div className="flex flex-col gap-8 text-md text-[#E6F2F3]">
              <div>
                Related to staying somewhere scenic is the option to participate
                in an ecological program. If you want to be fully immersed in
                the great outdoors, working with an ecological project is a
                great way to connect with nature hands-on while practicing
                responsible travel.
              </div>
              <div>
                Worldpackers ecological projects offer numerous ways to connect
                with nature. With nearly 700 opportunities to work across six
                continents, and the projects on offer cover everything from
                organic farming to permaculture to conservation to restoration
                to sustainable living and eco-tourism. These projects allow you
                to really experience the benefits of connecting with nature
                while learning new skills and being part of a collaborative
                community.
              </div>
              <div>
                Experiencing your destination through a Worldpackers eco program
                is also one of the best ways to give back to local communities
                and make sustainable travel a reality.
              </div>
            </div>
          </div>
          <div className="flex flex-col h-1/2 md:w-1/2 md:h-[90vh] px-4 md:pl-10 md:pr-0 lg:pl-20 lg:pr-0 md:justify-between md:items-end gap-4 md:gap-0">
            <div className="flex flex-col gap-2 text-[#75492E] text-lg font-semibold pt-10 md:items-end">
              <div>Research popular and local outdoor spots nearby</div>
              <div>
                <Image
                  src="/Images/how/ArrowNext.png"
                  height={524}
                  width={524}
                  alt="Arrow"
                  className="w-[40px] sm:w-[60px]"
                />
              </div>
            </div>
            <Image
              src="/Images/how/How3.png"
              height={1140}
              width={760}
              alt="Nature Image"
              className="aspect-auto object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse">
          <div className="flex flex-col bg-[#012E30] h-1/2 md:w-1/2 p-4 sm:p-8 lg:p-10 xl:p-20 pt-10 gap-4">
            <div className="text-[#C67F54] text-xl font-semibold">
              Research popular and local outdoor spots nearby
            </div>
            <div className="flex flex-col gap-8 text-md text-[#E6F2F3]">
              <div>
                From popular national parks to your local swimming hole, there's
                bound to be somewhere to enjoy the outdoors wherever you may
                roam!
              </div>
              <div>
                The great thing about including the outdoors on your itinerary
                is that it's often very low-cost. Camping in a national forest
                is usually free, and be sure to ask your friends if they have
                any useful outdoor equipment like tents, kayaks, or hiking poles
                that you can bring with you on your journey so you can avoid
                renting costs.
              </div>
              <div>
                Everyone connects differently, whether you're alone, in a tour
                group, with a savvy stranger, or with those closest to you.
                Choose what you know will benefit your experience the most, and
                follow through with it.
              </div>
            </div>
          </div>
          <div className="flex flex-col h-1/2 md:w-1/2 md:h-[90vh] px-4 md:pr-10 md:pl-0 lg:pr-20 lg:pl-0 md:justify-between gap-4 md:gap-0">
            <div className="flex flex-col gap-2 text-[#75492E] text-lg font-semibold pt-10 ">
              <div>Practice mindfulness, and then take it outside</div>
              <div>
                <Image
                  src="/Images/how/ArrowNext.png"
                  height={524}
                  width={524}
                  alt="Arrow"
                  className="w-[40px] sm:w-[60px]"
                />
              </div>
            </div>
            <Image
              src="/Images/how/How4.png"
              height={1140}
              width={760}
              alt="Nature Image"
              className="aspect-auto object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col bg-[#012E30] h-1/2 md:w-1/2 p-4 sm:p-8 lg:p-10 xl:p-20 pt-10 gap-4">
            <div className="text-[#C67F54] text-xl font-semibold">
              Practice mindfulness, and then take it outside
            </div>
            <div className="flex flex-col gap-8 text-md text-[#E6F2F3]">
              <div>
                Mindfulness means cultivating a heightened sense of awareness
                while striving to be more present. Meditating is one of the
                biggest ways to practice mindfulness, which requires a quiet
                space to sit and reflect.
              </div>
              <div>
                What better way to do this than in nature? Keep a section of
                your travel journal blank to record the insights, feelings, and
                thoughts that come to you when you're practicing mindfulness in
                nature.
              </div>
              <div>
                Write down the goals you have or the ways you hope to grow
                closer to nature, and see what progress you make! Connecting
                with nature is a fantastic form of self-care.
              </div>
            </div>
          </div>
          <div className="flex flex-col h-1/2 md:w-1/2 md:h-[90vh] px-4 md:pl-10 md:pr-0 lg:pl-20 lg:pr-0 md:justify-between md:items-end gap-4 md:gap-0">
            <div className="flex flex-col gap-2 text-[#75492E] text-lg font-semibold pt-10 md:items-end">
              <div>Try learning a new outdoor skill</div>
              <div>
                <Image
                  src="/Images/how/ArrowNext.png"
                  height={524}
                  width={524}
                  alt="Arrow"
                  className="w-[40px] sm:w-[60px]"
                />
              </div>
            </div>
            <Image
              src="/Images/how/How5.png"
              height={1140}
              width={760}
              alt="Nature Image"
              className="aspect-auto object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse">
          <div className="flex flex-col bg-[#012E30] h-1/2 md:w-1/2 p-4 sm:p-8 lg:p-10 xl:p-20 pt-10 gap-4">
            <div className="text-[#C67F54] text-xl font-semibold">
              Try learning a new outdoor skill
            </div>
            <div className="flex flex-col gap-8 text-md text-[#E6F2F3]">
              <div>
                One way to make sure you are always taking time out for nature
                is to spend some time learning a new outdoor hobby. This will
                help you step out of your comfort zone, challenge you to try
                something new and exciting, and deepen your knowledge for all
                things outdoors.
              </div>
              <div>
                You might decide to try rock climbing or be a part of a guided
                kayaking tour. If it's winter, you could take advantage of the
                area's climate by learning how to ski or snowboard. Learning new
                outdoor skills like these will open the doors to new ways of
                enjoying the various destinations you will visit throughout your
                life.
              </div>
            </div>
          </div>
          <div className="flex flex-col h-1/2 md:w-1/2 md:h-[90vh] px-4 md:pr-10 md:pl-0 lg:pr-20 lg:pl-0 md:justify-between gap-4 md:gap-0">
            <div className="flex flex-col gap-2 text-[#75492E] text-lg font-semibold pt-10 ">
              <div>Use nature to reset and recharge</div>
              <div>
                <Image
                  src="/Images/how/ArrowNext.png"
                  height={524}
                  width={524}
                  alt="Arrow"
                  className="w-[40px] sm:w-[60px]"
                />
              </div>
            </div>
            <Image
              src="/Images/how/How6.png"
              height={1140}
              width={760}
              alt="Nature Image"
              className="aspect-auto object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-0">
          <div className="flex flex-col bg-[#012E30] h-1/2 md:w-1/2 p-4 sm:p-8 lg:p-10 xl:p-20 pt-10 gap-4">
            <div className="text-[#C67F54] text-xl font-semibold">
              Use nature to reset and recharge
            </div>
            <div className="flex flex-col gap-8 text-md text-[#E6F2F3]">
              <div>
                It's been proven that spending time in nature increases one's
                overall strength and enthusiasm for life. Not only are you
                getting a good physical workout in, you are grounding yourself
                mentally and forging a spiritual bond with the world around you
                and your inner self.
              </div>
              <div>
                It's true that being connected with nature serves us many
                benefits, and one of the best ones is that it creates a huge
                shift in our perspective. Our minds are opened and all our
                senses are actively engaged with our surroundings. We are able
                to see what a small space we occupy in the world and can better
                appreciate the role nature plays in our lives.
              </div>
              <div>
                Connecting with nature to care for ourselves and the earth is
                grounding and restorative. Feeling the sun on your face and
                breathing in some much-needed fresh air can help us feel alive,
                inspired, and offers us a unique opportunity to pursue
                adventures authentically and naturally.
              </div>
            </div>
          </div>
          <div className="flex flex-col h-1/2 md:w-1/2 md:h-[90vh] px-4 md:pl-10 md:pr-0 lg:pl-20 lg:pr-0 md:justify-end md:items-end gap-4 md:gap-0">
            <Image
              src="/Images/how/How7.png"
              height={1140}
              width={760}
              alt="Nature Image"
              className="aspect-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default How;
