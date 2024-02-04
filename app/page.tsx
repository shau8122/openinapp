"use client";
import Image from "next/image";
import discordLogo from "@/public/images/discordLogo.svg";
import githubLogo from "@/public/images/githubLogo.svg";
import linkedinLogo from "@/public/images/linkedinLog.svg";
import twitterLogo from "@/public/images/twitterLogo.svg";
import discordLogo1 from "@/public/images/discordLogo1.svg";
import githubLogo1 from "@/public/images/githubLogo1.svg";
import linkedinLogo1 from "@/public/images/linkedinLog1.svg";
import twitterLogo1 from "@/public/images/twitterLogo1.svg";
import googleIcon from "@/public/images/Icon/googleIcon.svg";
import appleIcon from "@/public/images/Icon/appleIcon.svg";
import secondaryLogo from "@/public/images/SecondaryLogo.svg";
import AuthForm from "@/components/AuthForm";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/upload");
    }
  }, [session, router]);

  return (
    <>
      {/* desktop login page */}
      <main className="lg:h-[110vh] md:block hidden h-[100vh] w-full relative overflow-hidden bg-[#F8FAFF] ">
        <div className="bg-[#605BFF]  w-1/2 h-full absolute top-0 left-0 transform -translate-x-20 -skew-x-6"></div>
        <div className="hidden md:block text-white">
          <div className="absolute top-20 left-20">
            <Image src={secondaryLogo} width={100} height={100} alt="logo" />
          </div>
          <div className="text-white absolute left-1/4 transform -translate-x-[75%] -translate-y-[50%] top-1/2 font-montserrat text-7xl font-bold leading-normal">
            Base
          </div>
          <div className=" absolute bottom-20 left-[5%] lg:left-[10%] w-[25%] flex items-center justify-between">
            <Image
              className="cursor-pointer "
              src={githubLogo1}
              alt="githubLogo"
            />
            <Image
              className="cursor-pointer "
              src={twitterLogo1}
              alt="githubLogo"
            />
            <Image
              className="cursor-pointer "
              src={discordLogo1}
              alt="githubLogo"
            />
            <Image
              className="cursor-pointer "
              src={linkedinLogo1}
              alt="githubLogo"
            />
          </div>
        </div>
        <div className="">
          <div className="w-1/2 h-full  flex justify-center items-center absolute top-0 right-0 text-black">
            <div className="w-full  sm:w-[400px] border-2 border-red-600  flex flex-col justify-center  p-10 ">
              <h1 className=" text-4xl font-bold font-montserrat mb-2">
                Sign in
              </h1>
              <p className=" font-lato text-base font-normal leading-normal mb-5">
                sign in to your account
              </p>
              <div className="flex justify-between items-center w-full gap-2 mt-4 border-2 border-red-600">
                <div className="flex justify-center items-center px-3 py-2 gap-2 rounded-md ">
                  <Image src={googleIcon} alt="google Icon" />
                  <button
                    onClick={() => signIn("google")}
                    className="text-secondary text-center font-montserrat text-xs font-normal leading-normal"
                  >
                    Sign in with Google
                  </button>
                </div>
                <div className="flex justify-center gap-2 px-3 py-2  items-center rounded-md ">
                  <Image src={appleIcon} alt="apple Icon" />
                  <p className="text-secondary text-center font-montserrat text-xs font-normal leading-normal">
                    Sign in with Apple
                  </p>
                </div>
              </div>
              <div className="mt-4 w-full border-2 border-red-700 p-3">
                <AuthForm />
                <div className=" flex   gap-2 justify-center text-sm mt-4 px-2 text-gray-500">
                  <div className="text-secondary text-center font-lato ">
                    Don&apos;t have an account?
                  </div>
                  <button className=" text-blue-500 cursor-pointer ">
                    Register here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* mobile login page */}
      <main className=" block md:hidden w-full relative overflow-hidden bg-[#F8FAFF] ">
        <div className="bg-[#605BFF] w-full h-[70px]">
          <div className="flex items-center  w-full h-full ">
            <div className=" w-[30%] h-[50%] ml-10 flex  items-center gap-5">
              <Image
                src={secondaryLogo}
                width={50}
                height={50}
                alt="secondary logo"
              />
              <div className="text-white text-[20px] font-semibold font-nunito leading-normal ">
                Base
              </div>
            </div>
          </div>
        </div>
        
        <div className="">
          <div className=" w-full   flex justify-center items-center   text-black">
            <div className="w-full sm:w-[70%]  flex flex-col justify-center  p-10 ">
              <h1 className=" text-4xl font-bold font-montserrat mb-2">
                Sign in
              </h1>
              <p className=" font-lato text-base font-normal leading-normal mb-5">
                sign in to your account
              </p>
              <div className="flex justify-between items-center w-full gap-2 mt-4">
                <div className="flex justify-center items-center bg-white py-1  gap-2 rounded-md ">
                  <Image src={googleIcon} alt="google Icon" />
                  <button
                    onClick={() => signIn("google")}
                    className="text-secondary text-center font-montserrat text-xs font-normal leading-normal"
                  >
                    Sign in with Google
                  </button>
                </div>
                <div className="flex justify-center gap-2 py-1  bg-white items-center rounded-md ">
                  <Image src={appleIcon} alt="apple Icon" />
                  <p className="text-secondary text-center font-montserrat text-xs font-normal leading-normal">
                    Sign in with Apple
                  </p>
                </div>
              </div>
              <div className="mt-2 w-full">
                <AuthForm />
                <div className=" flex flex-col  gap-5 justify-center text-sm mt-8  px-2 text-gray-500">
                  <div className="text-secondary text-center font-lato ">
                    Don&apos;t have an account?
                  </div>
                  <button className=" text-blue-500 cursor-pointer ">
                    Register here
                  </button>
                </div>
              </div>
              <div className=" flex items-center  mt-10 justify-around">
                <Image
                  className="cursor-pointer "
                  src={githubLogo}
                  alt="githubLogo"
                />
                <Image
                  className="cursor-pointer "
                  src={twitterLogo}
                  alt="githubLogo"
                />
                <Image
                  className="cursor-pointer "
                  src={discordLogo}
                  alt="githubLogo"
                />
                <Image
                  className="cursor-pointer "
                  src={linkedinLogo}
                  alt="githubLogo"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;
