
"use client";

import React, { useState } from "react";
import crossIcon from "@/public/Icon/crossIcon.svg";
import Image from "next/image";
import DetailsForm from "./DetailsForm";
import { FieldValues } from "react-hook-form";

interface ModalProps {
  isOpen: boolean;
  handleClick: () => void;
  setProfileData: (data: FieldValues) => void;
}
const Modal: React.FC<ModalProps> = ({ isOpen, handleClick,setProfileData }) => {
  const [formText, setFormText] = useState("basic")
  return (
    <div>
      {isOpen && (
        <>
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
            onClick={handleClick}
          ></div>
          <div className="fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] h-full flex items-center justify-center z-50 ">
            <div className="bg-white px-8 py-2 rounded-2xl shadow-lg w-[500px] z-100">
              <div className="flex justify-center items-start flex-col w-full">
                <div className="flex justify-between items-center w-full my-5">
                  <h1 className="text-light-bulma font-figtree text-xl  font-semibold leading-8 ">
                    Add New Profile
                  </h1>
                  <Image
                    onClick={handleClick}
                    className="cursor-pointer"
                    src={crossIcon}
                    alt="cross icon"
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <div className="flex justify-around w-full gap-16">
                    <div className="flex flex-col  gap-1 w-1/2">
                      <button className="font-semibold text-light-bulma font-figtree text-[16px]">Basic</button>
                      <div className={`h-1 w-full ${formText==='basic' ? "bg-[#3F84F8]":"bg-[#D9D9D9]"}  rounded-lg `}></div>
                    </div>
                    <div className="flex flex-col gap-1 w-1/2">
                      <button className="font-semibold text-light-bulma font-figtree text-[16px]">Social</button>
                      <div className={ `h-1 w-full ${formText==='social' ? "bg-[#3F84F8]":"bg-[#D9D9D9]"} rounded-lg`}></div>
                    </div>
                  </div>
                  <DetailsForm handleClick={handleClick} setProfileData={setProfileData} setFormText={setFormText} formText={formText}/>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
    </div >
  );
};

export default Modal;
