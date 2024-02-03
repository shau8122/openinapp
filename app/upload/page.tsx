"use client";

import bellIcon from "@/public/images/Icon/bellIcon.svg";
import profileImage from "@/public/images/profilImage.png";
import closeIcon from '@/public/images/Icon/close.svg'

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import Sidebar from "@/components/Sidebar";
import Dropzone from "@/components/Dropzone";

const InitialData = [
  {
    id: 1,
    links: "timesonline.co.uk",
    prefix: "QB0GaK7",
    selectedTags: ["Technology", "Sports", "Health"],
  },
  {
    id: 2,
    links: "merriam-webster.com",
    prefix: "8oUTDyz",
    selectedTags: ["Travel", "Art", "Finance"],
  },
  {
    id: 3,
    links: "newyorker.com",
    prefix: "Z9i2o9o",
    selectedTags: ["Fashion", "Food", "Music"],
  },
  {
    id: 4,
    links: "angelfire.com",
    prefix: "pW44f49",
    selectedTags: ["Technology", "Travel", "Finance"],
  },
  {
    id: 5,
    links: "rambler.ru",
    prefix: "w1vDJvP",
    selectedTags: ["Sports", "Music", "Education"],
  },
  {
    id: 6,
    links: "timesonline.co.uk",
    prefix: "Uz3Uq87",
    selectedTags: ["Food", "Art", "Health"],
  },
  {
    id: 7,
    links: "state.gov",
    prefix: "PwT2wMc",
    selectedTags: ["Travel", "Sports", "Finance"],
  },
  {
    id: 8,
    links: "youtube.com",
    prefix: "c1TO1x6",
    selectedTags: ["Technology", "Music", "Education"],
  },
  {
    id: 9,
    links: "washingtonpost.com",
    prefix: "4KtfXaU",
    selectedTags: ["Fashion", "Food", "Art"],
  },
  {
    id: 10,
    links: "icq.com",
    prefix: "nh294Ty",
    selectedTags: ["Technology", "Sports", "Health"],
  },
  {
    id: 11,
    links: "cbsnews.com",
    prefix: "0e56PW3",
    selectedTags: ["Travel", "Music", "Finance"],
  },
  {
    id: 12,
    links: "google.pl",
    prefix: "NNq9FXo",
    selectedTags: ["Technology", "Food", "Health"],
  },
  {
    id: 13,
    links: "uiuc.edu",
    prefix: "55b5FKK",
    selectedTags: ["Fashion", "Sports", "Finance"],
  },
  {
    id: 14,
    links: "creativecommons.org",
    prefix: "0Q43Q2J",
    selectedTags: ["Travel", "Art", "Education"],
  },
  {
    id: 15,
    links: "cam.ac.uk",
    prefix: "1dYVlCo",
    selectedTags: ["Technology", "Food", "Music"],
  },
  {
    id: 16,
    links: "microsoft.com",
    prefix: "5leG2TS",
    selectedTags: ["Fashion", "Sports", "Education"],
  },
  {
    id: 17,
    links: "ebay.co.uk",
    prefix: "2tYI62f",
    selectedTags: ["Technology", "Art", "Health"],
  },
  {
    id: 18,
    links: "ucsd.edu",
    prefix: "Dfdk2F4",
    selectedTags: ["Food", "Travel", "Finance"],
  },
  {
    id: 19,
    links: "constantcontact.com",
    prefix: "6OFdyTY",
    selectedTags: ["Technology", "Sports", "Education"],
  },
  {
    id: 20,
    links: "seesaa.net",
    prefix: "IYU6iyo",
    selectedTags: ["Fashion", "Music", "Health"],
  },
  {
    id: 21,
    links: "globo.com",
    prefix: "9Q8j9h5",
    selectedTags: ["Travel", "Art", "Finance"],
  },
  {
    id: 22,
    links: "github.io",
    prefix: "5e7TzC8",
    selectedTags: ["Technology", "Sports", "Music"],
  },
  {
    id: 23,
    links: "bluehost.com",
    prefix: "8Je0tSH",
    selectedTags: ["Fashion", "Food", "Education"],
  },
  {
    id: 24,
    links: "engadget.com",
    prefix: "9S74C00",
    selectedTags: ["Technology", "Travel", "Health"],
  },
  {
    id: 25,
    links: "psu.edu",
    prefix: "38yv9fT",
    selectedTags: ["Sports", "Music", "Finance"],
  },
  {
    id: 26,
    links: "canalblog.com",
    prefix: "w6WNGwa",
    selectedTags: ["Fashion", "Food", "Art"],
  },
  {
    id: 27,
    links: "pen.io",
    prefix: "4RW1EV6",
    selectedTags: ["Technology", "Travel", "Education"],
  },
  {
    id: 28,
    links: "parallels.com",
    prefix: "llpTUMe",
    selectedTags: ["Sports", "Music", "Health"],
  },
  {
    id: 29,
    links: "skyrock.com",
    prefix: "rdv8kZ3",
    selectedTags: ["Technology", "Food", "Finance"],
  },
  {
    id: 30,
    links: "fastcompany.com",
    prefix: "7zIf8YB",
    selectedTags: ["Travel", "Art", "Education"],
  },
  {
    id: 31,
    links: "4shared.com",
    prefix: "3y72wJ1",
    selectedTags: ["Technology", "Sports", "Music"],
  },
  {
    id: 32,
    links: "unc.edu",
    prefix: "x92LK5W",
    selectedTags: ["Fashion", "Food", "Finance"],
  },
  {
    id: 33,
    links: "irs.gov",
    prefix: "fvD4yQu",
    selectedTags: ["Technology", "Travel", "Education"],
  },
  {
    id: 34,
    links: "apache.org",
    prefix: "7d46u5g",
    selectedTags: ["Sports", "Music", "Health"],
  },
  {
    id: 35,
    links: "deliciousdays.com",
    prefix: "04Gwoph",
    selectedTags: ["Technology", "Food", "Finance"],
  },
  {
    id: 36,
    links: "smugmug.com",
    prefix: "Z8NZ9t6",
    selectedTags: ["Fashion", "Travel", "Music"],
  },
  {
    id: 37,
    links: "list-manage.com",
    prefix: "SeVM7Vy",
    selectedTags: ["Health", "Education", "Finance"],
  },
  {
    id: 38,
    links: "icio.us",
    prefix: "HO3p8A4",
    selectedTags: ["Technology", "Sports", "Music"],
  },
  {
    id: 39,
    links: "webeden.co.uk",
    prefix: "5dndeO4",
    selectedTags: ["Fashion", "Food", "Art"],
  },
  {
    id: 40,
    links: "howstuffworks.com",
    prefix: "NkEas9V",
    selectedTags: ["Technology", "Travel", "Finance"],
  },
];
type Data ={
  id:number,
  links:string,
  prefix:string,
  selectedTags:string[]
}
const tag = [
  "Technology",
  "Fashion",
  "Food",
  "Travel",
  "Sports",
  "Music",
  "Art",
  "Health",
  "Education",
  "Finance",
];
const Upload = () => {

  const [data,setData]= useState<Data[]>(InitialData)

 

  const handleSelectChange = (value: string, id: number) => {
    setData((prevValue) =>
  prevValue.map((item) =>
    item.id === id
      ? { ...item, selectedTags: [...item.selectedTags, value] }
      : item
  )
);
  };
  const handleRemoveTag = (value:string,id:number)=>{
    setData((prevValue) =>
    prevValue.map((item) =>
      item.id === id
        ? { ...item, selectedTags: item.selectedTags.filter(tag => tag !== value) }
        : item
    )
  );
  }
  return (
    <>
      
      <div className="text-black flex px-4 flex-col flex-1 overflow-y-auto ">
      <h1 className="font-semibold block md:hidden font-figtree text-2xl leading-8 ">
        Upload CSV{" "}
      </h1>
        <div>
          <div className="w-full h-[60vh] md:h-[80vh] flex items-center justify-center">
            <Dropzone />
          </div>
        </div>
        <div className="w-full  ">
          <h1 className="font-semibold font-figtree text-2xl leading-8">Uploads</h1>
          <div className="w-full p-4 overflow-x-auto">
            <table className="w-full font-figtree  min-w-[900px] flex justify-center items-center flex-col gap-5">
              <thead className="w-full flex justify-between items-center ">
                <tr className="text-sm font-semibold w-full flex justify-between items-center">
                  <th className="text-start w-[10%]">Sl No.</th>
                  <th className="text-start w-[20%]">Links</th>
                  <th className="text-start w-[10%]">Prefix</th>
                  <th className="text-start w-[20%]">Add Tags</th>
                  <th className="text-start w-[30%]">Selected Tags</th>
                </tr>
              </thead>
              <tbody className="w-full flex justify-between items-center flex-col gap-5">
                {data.map((row) => (
                  <tr
                    key={row.id}
                    className="w-full flex justify-between items-center "
                  >
                    <td className="text-start w-[10%]">{row.id}</td>
                    <td className="text-blue-500 underline text-start w-[20%]">
                      <Link target="_blank" href={row.links}>
                        {row.links}
                      </Link>
                    </td>
                    <td className="text-start w-[10%]">{row.prefix}</td>
                    <td className="text-start w-[20%]">
                      {/* <label htmlFor="SelectTag">Select Tags:</label> */}
                      <select
                        onChange={(e) =>
                          handleSelectChange(e.target.value, row.id)
                        }
                        name="tags"
                        id="tags"
                        value=""
                        className="px-2 py-1 flex "
                      >
                        <option className="px-2 py-2" value="" disabled hidden>
                          Select Tags 
                        </option>
                        {tag
                          .filter((t) => !row.selectedTags.includes(t))
                          .map((t) => (
                            <option className="px-2 py-2" key={t} value={t}>
                              {t}
                            </option>
                          ))}
                      </select>
                    </td>
                    <td className="text-start w-[30%]">{
                      row.selectedTags.map((tag)=>(
                        <div className="inline-block m-1 bg-[#605BFF] text-white px-2 py-[2px] rounded-md" key={tag}>
                          {tag}
                          <button onClick={()=>handleRemoveTag(tag,row.id)} className="ml-1"><Image src={closeIcon} width={10} height={10} alt="close"/></button>
                        </div>
                      ))
                    }</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
