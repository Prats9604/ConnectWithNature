import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/Components/Header";
// import RegLoginForm from "@/Components/RegLoginForm";
// import AddPostForm from "@/Components/AddPostForm";
import RegLoginForm from "./Components/RegLoginForm";
import AddPostForm from "./Components/AddPostForm";
import { isLogin, logOut } from "@/utils/auth";
import axios from "axios";

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
  const [toggle, setToggle] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);
  const [isForm2Open, setForm2Open] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [login, setlogin] = useState(false);
  const [userId, setuserId] = useState();
  const [userdata, setuserdata] = useState();

  const handleJoinUsClick = () => {
    setFormOpen(true);
  };
  const handleCloseForm = () => {
    setFormOpen(false);
  };
  const handleAddPostClick = () => {
    setForm2Open(true);
  };
  const handleCloseForm2 = () => {
    setForm2Open(false);
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleContributorClick = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const autheticate = async () => {
      if (await isLogin()) {
        setlogin(true);
      }
    };

    autheticate();
  });

  useEffect(() => {
    const reterivedata = async () => {
      try {
        const userId: any = localStorage.getItem("userId");
        setuserId(userId);
      } catch (error: any) {
        console.log("eroor", error);
      }
    };

    const reteriveuserdata = async () => {
      try {
        if (userId) {
          const resp = await axios.get(
            "http://localhost:5000/api/users/" + userId
          );

          console.log("response=====", resp);
          setuserdata(resp.data.name);
        }
      } catch (eroor: any) {
        console.log(eroor);
      }
    };

    reterivedata();
    reteriveuserdata();
  });
  return (
    <>
      <Header />
      <div className={`relative ${isModalOpen ? "bg-opacity-80" : ""}`}>
        <div className="flex flex-col bg-[#012527] pt-20 pb-10 md:pb-26 px-4 sm:px-8 md:px-10 lg:px-20 gap-4 md:gap-8">
          {!login ? (
            <div className="NoContributorSegment p-8 flex flex-col md:flex-row bg-[#012E30] justify-between gap-8 md:gap-10 xl:gap-20 items-center">
              <div className="flex flex-col gap-2">
                <div className="text-[#C67F54] font-semibold">
                  Join Us and Share Your Adventures with the World!
                </div>
                <div>
                  Discover breathtaking destinations and share your own travel
                  stories. Create an account to inspire others by posting your
                  favorite nature spots, along with photos and descriptions.
                  Let's explore together!
                </div>
              </div>
              <div className="flex items-start w-[100%] md:w-auto">
                <button
                  onClick={handleJoinUsClick}
                  className="flex h-[46px] text-xl w-[120px] bg-[#C67F54] text-center hover:scale-95 items-center justify-center"
                >
                  Join Us
                </button>
              </div>
            </div>
          ) : (
            <div className="ContributorSegment flex flex-col md:mt-4 sm:flex-row gap-4 sm:gap-8 justify-end">
              <div className="flex justify-end items-center gap-2">
                <div>~{userdata}</div>
                <button
                  onClick={handleContributorClick}
                  className="ContributorNameInitial text-2xl font-semibold text-[#012527] bg-[#1C3F43] hover:bg-[#C67F54] hover:text-white rounded-full w-10 h-10 flex items-center justify-center"
                >
                  {userdata ? <>{userdata[0]}</> : <>-</>}
                </button>
              </div>

              <div className="flex justify-end items-center gap-2">
                <div>Add Post</div>
                <button
                  onClick={handleAddPostClick}
                  className="text-3xl bg-[#1C3F43] hover:bg-[#C67F54] text-white rounded-full w-10 h-10 flex items-center justify-center"
                >
                  +
                </button>
              </div>

              <div className="flex justify-end items-center  gap-2">
                <div>Your Posts</div>
                <div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={toggle}
                      onChange={handleToggle}
                    />
                    <div className="w-11 h-6 bg-[#1C3F43] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer dark:bg-[#1C3F43] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#C67F54]"></div>
                  </label>
                </div>
              </div>
            </div>
          )}

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
          {/* RegLoginForm Component */}
          <RegLoginForm isOpen={isFormOpen} onClose={handleCloseForm} />
          <AddPostForm isOpen={isForm2Open} onClose={handleCloseForm2} />
        </div>

        {/* Modal for Log Out */}
        {isModalOpen && (
          <>
            {/* Overlay to darken the background */}
            <div
              className="fixed inset-0 bg-black opacity-50 z-40"
              onClick={handleCloseModal}
            ></div>

            {/* Modal Content */}
            <div className="fixed z-50 top-20 right-10 bg-white p-4 rounded-lg shadow-md">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={async () => {
                  console.log("User logged out");
                  await logOut();
                  handleCloseModal();
                }}
              >
                Log Out
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Where;
