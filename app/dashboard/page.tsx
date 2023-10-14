"use client";
import searchIcon from "@/public/Icon/Search icon.svg";
import bellIcon from "@/public/Icon/bellIcon.svg";
import profileImage from "@/public/images/profilImage.png";
import totalLikes from "@/public/Icon/totalLikes.svg";
import totalTransactions from "@/public/Icon/totalTransactions.svg";
import twitterIcon from "@/public/Icon/twitterIcon.svg";
import instagramIcon from "@/public/Icon/instagranIcon.svg";
import mailIcon from "@/public/Icon/mailIcon.svg";
import whatsappIcon from "@/public/Icon/whatsappIcon.svg";
import totalUsers from "@/public/Icon/totalUsers.svg";
import totalRevenues from "@/public/Icon/totalRevenues.svg";
import controlIcon from "@/public/Icon/Controls.svg";
import Image from "next/image";
import Modal from "@/components/Modal";
import { useState } from "react";
import ChartComponent from "@/components/ChartComponent";
import DonutChartComponent from "@/components/DonutChartComponent";
import { useSession } from "next-auth/react";
import Sidebar from "@/components/Sidebar/Sidebar";

const cardDetails = [
  {
    title: "Total Revenues",
    percentage: "+2.5%",
    amount: "$2,129,430",
    icon: totalRevenues,
    colorClass: "bg-[#7FCD93]",
  },
  {
    title: "Total Transactions",
    percentage: "+1.7%",
    amount: "1,520",
    icon: totalTransactions,
    colorClass: "bg-[#DEBF85]",
  },
  {
    title: "Total Likes",
    percentage: "+1.4%",
    amount: "9,721",
    icon: totalLikes,
    colorClass: "bg-[#ECA4A4]",
  },
  {
    title: "Total Users",
    percentage: "+4.2%",
    amount: "9,721",
    icon: totalUsers,
    colorClass: "bg-[#A9B0E5]",
  },
];

const Dashboard = () => {
  const {data:session}=useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [profileData, setProfileData] = useState<any>({});
  console.log(profileData);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        handleClick={handleClick}
        setProfileData={setProfileData}
      />
      {
        isOpenMenu && (
          <div className="block relative md:hidden">
            <div className="absolute">

            <Sidebar setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
            </div>
          </div>
        )
      }
      <div className="text-black sm:px-1 md:px-10 py-5 flex flex-col flex-1 overflow-y-auto ">
        <div className="flex justify-between ">
          <h1 className="font-bold font-montserrat sm:text-xl md:text-2xl text-center ">Dashboard </h1>
          <div className="md:hidden" onClick={()=>setIsOpenMenu(true)}>Menu</div>
          <div className="flex md:gap-5">
            <div className="bg-white rounded-lg flex justify-between items-center sm:w-[100px] md:w-[200px] px-5 py-2">
              <input
                className="text-gray-400 font-lato text-sm bg-transparent border-0 outline-none flex-grow"
                placeholder="Search..."
                aria-label="Search"
              />
              <Image src={searchIcon} alt="search icon" />
            </div>
            <Image src={bellIcon} alt="bell icon" />
            <Image
              className="w-[40px] h-[40px] rounded-full"
              src={session?.user?.image || profileImage }
              alt="profile image"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div>
          <div className="max-w-screen-2xl overflow-auto">

          <div className="flex sm:justify-start md:justify-between gap-4 md:items-center  mt-5 overflow-auto">
            {cardDetails.map((item) => (
              <div
                key={item.title}
                className="flex  justify-center bg-white items-start flex-col shadow-lg p-4 mb-4 rounded-2xl "
              >
                <div className={`${item.colorClass}  p-2 rounded-full`}>
                  <Image src={item.icon} alt="total revenues" />
                </div>
                <p className="w-[200px] text-lato text-[11px] text-black mt-3">
                  {item.title}
                </p>
                <div className="flex w-full justify-between items-center gap-2">
                  <h1 className="text-black font-open-sans text-xl font-bold">
                    {item.amount}
                  </h1>
                  <p className="text-[10px] text-[#3CC952] bg-[#E9F9EB] rounded-lg p-1 ">
                    {item.percentage}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </div>
          <div className=" w-full mt-5 h-[400px]  m-auto p-4 border rounded-xl shadow-lg bg-white ">
            <ChartComponent />
          </div>
          <div className="w-full  flex flex-col md:flex-row  mt-5 gap-4">
            <div className="w-full h-[250px] md:w-1/2 bg-white rounded-2xl shadow-xl p-5">
              
              <DonutChartComponent />
            </div>
            <div className="w-full flex h-[250px] md:w-1/2 justify-center items-center bg-white shadow-lg rounded-xl">
              {!profileData.name ? (
                <div className="  w-[50px] h-[50px] bg-light-goku rounded-full">
                  <Image
                    onClick={handleClick}
                    className="cursor-pointer"
                    src={controlIcon}
                    alt="Profile Controls Icon"
                  />
                </div>
              ) : (
                <>
                  <div className="md:p-10 p-4 relative">
                    <h1 className="   font-semibold font-figtree text-2xl text-black">
                      {profileData.name}
                    </h1>
                    <div className="flex flex-col md:mr-5">

                    <div className="flex md:flex-row flex-col justify-between mt-5 ">
                      <button className="flex  items-center justify-start md:justify-center gap-3">
                        <div className={`bg-[#E9F9EB] p-3 rounded-full`}>
                          <Image src={whatsappIcon} alt="whatsappIcon" />
                        </div>
                        <p className="text-lato text-sm underline  text-black">
                          +91 {profileData?.phone || ""}
                        </p>
                      </button>
                      <button className="flex  items-center justify-start md:justify-center gap-3">
                        <div className={`bg-[#FFE9EC] p-2 rounded-full`}>
                          <Image src={instagramIcon} alt="instagramIcon" />
                        </div>
                        <p className="text-lato text-sm underline  text-black">
                           {profileData?.instagram || "john_official"}
                        </p>
                      </button>
                      
                    </div>
                    <div className="flex md:flex-row flex-col justify-between mt-5 ">
                      <button className="flex  items-center  gap-3">
                        <div className={`bg-[#EBE6F9] p-2 rounded-full`}>
                          <Image src={mailIcon} alt="mailIcon" />
                        </div>
                        <p className="text-lato text-sm underline  text-black">
                           {profileData?.email || "john@xyz.com"}
                        </p>
                      </button>
                      <button className="flex  items-center  gap-3">
                        <div className={`bg-[#FFE9E9] p-2 rounded-full`}>
                          <Image src={twitterIcon} alt="twitterIcon" />
                        </div>
                        <p className="text-lato text-sm underline  text-black">
                           {profileData?.youtube || "john_official"}
                        </p>
                      </button>
                    </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
