import React from "react";
import Image from "next/image";
import Header from "@/Components/Header";

const Why = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col h-[100vh] bg-[#012527] pt-20 pb-10 md:pb-26  px-4 sm:px-8 md:px-10 lg:px-20 gap-16 md:gap-20">
        <div>
          There are tons of benefits that come with taking some time to wander
          the great outdoors as you travel!
        </div>
      </div>
    </>
  );
};

export default Why;
