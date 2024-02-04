"use client";
import Image from "next/image";
import bellIcon from "@/public/images/Icon/bellIcon.svg";
import profileImage from "@/public/images/profilImage.png";
import hamburger from "@/public/images/Icon/burger-regular.svg";
import MainLogo from "@/public/images/MainLogo.svg";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      {isOpenMenu && (
        <div className="block relative md:hidden">
          <div className="absolute">
            <Sidebar setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
          </div>
        </div>
      )}
      {/* desktop navabr */}
      <div className="md:flex hidden justify-between items-center mb-5">
        <h1 className="font-semibold   font-figtree text-2xl leading-8 text-center ">
          Upload CSV{" "}
        </h1>

        <div className="flex md:gap-8 gap-5">
          <Image src={bellIcon} alt="bell icon" />
          <Image
            className="w-[40px] h-[40px] rounded-full"
            src={session?.user?.image || profileImage}
            alt="profile image"
            width={100}
            height={100}
          />
        </div>
      </div>
      {/* mobile navbar */}
      <div className="flex md:hidden justify-between items-center mb-5">
        <div className="md:hidden flex items-center gap-5  ">
          <button onClick={() => setIsOpenMenu(true)}>
            <Image src={hamburger} width={35} height={35} alt="ham" />
          </button>
         
          
        <div className=" w-[30%] h-[50%] flex  items-center gap-2">
          <Image
            src={MainLogo}
            width={50}
            height={50}
            alt="secondary logo"
          />
          <h1 className="text-nunito text-[20px] font-semibold text-[#030229]">
            Base
          </h1>
       
        </div>
         
        </div>

        <div className="flex md:gap-8 gap-5">
          <Image src={bellIcon} alt="bell icon" />
          <Image
            className="w-[40px] h-[40px] rounded-full"
            src={session?.user?.image || profileImage}
            alt="profile image"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
