import Image from "next/image";
import uploadIcon from "@/public/images/Icon/upload.svg";
import excelIcon from "@/public/images/Icon/excel.svg";

import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useCallback,
  useEffect,
  useState,
} from "react";
import { FileWithPath, useDropzone } from "react-dropzone";

const Dropzone = () => {
  const [files, setFiles] = useState<FileWithPath>();
  const [rejected, setRejected] = useState([]);

  
  const { getRootProps, getInputProps, isDragActive, isFocused } = useDropzone({
    maxSize: 1024 * 1000,
    onDrop: (acceptedFiles: FileWithPath[]) => {
      // Handle the dropped files here
      setFiles(acceptedFiles[0]);
    },
    
  });

 

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!files?.length) return;

    
  };
  const handleRemove=(e: { preventDefault: () => void; })=>{
    e.preventDefault();
    setFiles(undefined);

  }
  return (
    <form onSubmit={handleSubmit}>
      <div
      {...getRootProps()}

       className=" w-[350px] sm:w-[500px] rounded-[8px] h-[300px] border-2 border-dashed flex items-center justify-center">
        <input {...getInputProps()}  />
        <div className="flex flex-col items-center justify-center gap-4">
          
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ):
            (
              <div className="w-full h-full flex flex-col items-center">
                 <Image src={excelIcon} height={40} width={40} alt="" />
                 {files ? <div className=" flex justify-center items-center flex-col gap-2">
                  <p >{files.name}</p>
                  <button className="text-red-500" onClick={handleRemove}>remove</button>
                 </div>:
                <p className="text-[##999CA0] text-[16px]">Drop your excel sheet here or <span className="text-blue-500">browse</span></p>
                 }
              </div>
            )
          }
        </div>
      </div>
      <button
        type="submit"
        className={`
            flex
            justify-center
            gap-2 items-center
            rounded-[8px]
            px-3
            py-4
            mt-4
            text-[16px]
            font-bold font-montserrat
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            bg-[#605BFF]
            ${files && "bg-[#605BFF]/75 cursor-not-allowed"}
            text-white
            hover:bg-[#605BFF]/75 focus-visible:bg-[#605BFF]/75 
            w-full`}
            disabled={files?true:false}
      >
        
      <Image src={uploadIcon} height={12} width={12} alt="" />
      Upload
      </button>
    </form>
  );
};

export default Dropzone;
