"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import DashBoardIcon from "./Icons/DashBoardIcon";
import UploadIcon from "./Icons/UploadIcon";
import InvoiceIcon from "./Icons/InvoiceIcon";
import ScheduleIcon from "./Icons/ScheduleIcon";
import CalendarIcon from "./Icons/CalendarIcon";
import SettingIcon from "./Icons/Settingicon";
import MainLogo from "@/public/images/MainLogo.svg";
import Plus from "@/public/images/Icon/plus.svg";

interface SidebarProps {
  isOpenMenu?: boolean;
  setIsOpenMenu?: any;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpenMenu, setIsOpenMenu }) => {
  const pathname = usePathname();

  return (
    <div
      className={`p-4 md:p-10 relative  rounded-xl h-[92vh] w-[300px]  md:w-[17vw] ${
        isOpenMenu && "bg-white"
      }`}
    >
      {isOpenMenu ? (<div className={`flex items-center  justify-between `}>
        <div className="flex justify-center items-center gap-2">

        <Image
          src={MainLogo}
          className=""
          width={50}
          height={50}
          alt="mainlogo"
        />
        <h1 className="text-nunito text-2xl font-semibold text-[#030229]">
          Base
        </h1>
        </div>
        <button onClick={() => setIsOpenMenu(false)}>
          <Image src={Plus} width={20} height={20} alt="close" />
        </button>
      </div>):(<div className={`flex items-center `}>
        <Image
          src={MainLogo}
          className="mx-auto"
          width={60}
          height={60}
          alt="mainlogo"
        />
        <h1 className="text-nunito text-2xl font-semibold text-[#030229]">
          Base
        </h1>
        
      </div>)}
      <nav className="mt-12">
        <ul role="list" className=" flex flex-col gap-3">
          <li className="text-[#9A9AA9] font-semibold">
            <Link
              href="dashboard"
              className={` flex items-center justify-start w-full gap-x-3  font-nunito   rounded-md py-3 px-2 text-lg  hover:font-bold
              ${pathname === "/dashboard" && "font-bold"}
                    `}
            >
              <DashBoardIcon isActive={pathname === "/dashboard"} />
              <span className="">Dashboard</span>
            </Link>
          </li>
          <li className="text-[#9A9AA9] font-semibold">
            <Link
              href="upload"
              className={` flex items-center justify-start w-full gap-x-3  font-nunito  rounded-md py-3 px-2 text-lg  hover:font-bold
              ${pathname === "/upload" && "font-bold text-[#605BFF]"}
                    `}
            >
              <UploadIcon isActive={pathname === "/upload"} />
              <span className="">Upload</span>
            </Link>
          </li>
          <li className="text-[#9A9AA9] font-semibold">
            <Link
              href="invoice"
              className={` flex items-center justify-start w-full gap-x-3  font-nunito  rounded-md py-3 px-2 text-lg  hover:font-bold
              ${pathname === "/invoice" && "font-bold text-[#605BFF]"}
                    `}
            >
              <InvoiceIcon isActive={pathname === "/invoice"} />
              <span className="">Invoice</span>
            </Link>
          </li>
          <li className="text-[#9A9AA9] font-semibold">
            <Link
              href="schedule"
              className={` flex items-center justify-start w-full gap-x-3  font-nunito rounded-md py-3 px-2 text-lg  hover:font-bold
              ${pathname === "/schedule" && "font-bold text-[#605BFF]"}
                    `}
            >
              <ScheduleIcon isActive={pathname === "/schedule"} />
              <span className="">Schedule</span>
            </Link>
          </li>
          <li className="text-[#9A9AA9] font-semibold">
            <Link
              href="calendar"
              className={` flex items-center justify-start w-full gap-x-3  font-nunito  rounded-md py-3 px-2 text-lg  hover:font-bold
              ${pathname === "/calendar" && "font-bold text-[#605BFF]"}
                    `}
            >
              <CalendarIcon isActive={pathname === "/calendar"} />
              <span className="">Calendar</span>
            </Link>
          </li>
          <li className="text-[#9A9AA9] font-semibold">
            <Link
              href="settings"
              className={` flex items-center justify-start w-full gap-x-3  font-nunito  rounded-md py-3 px-2 text-lg  hover:font-bold
              ${pathname === "/settings" && "font-bold text-[#605BFF]"}
                    `}
            >
              <SettingIcon isActive={pathname === "/settings"} />
              <span className="">Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
