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
    <main className="lg:h-[125vh] h-[100vh] w-full relative overflow-hidden bg-[#F8FAFF] ">
      <div className="bg-[#605BFF] w-full h-[100px]  md:w-1/2 md:h-full md:absolute md:top-0 md:left-0 md:transform md:-translate-x-20 md:-skew-x-6">
        <div className="flex items-center md:hidden w-full h-full ">

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
          {/* <div className=" flex items-center justify-around mt-28">
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
          </div> */}
        </div>
        </div>
      </div>
      <div className="hidden md:block text-white">
        {/* <div className="bg-white z-50">

       <Image src={secondaryLogo} width={100} height={100} alt="logo"/>
        </div>
         */}
        <div className="text-white absolute left-1/4 transform -translate-x-[75%] -translate-y-[50%] top-1/2 font-montserrat text-7xl font-bold leading-normal">
          Base
        </div>
        <div className=" absolute bottom-20 left-[5%] lg:left-[10%] w-[20%] flex items-center justify-between">
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
        <div className="md:w-1/2 w-full md:h-full  flex justify-center items-center md:absolute top-0 right-0 text-black">
          <div className="w-full  sm:w-[400px]  flex flex-col justify-center  p-10 ">
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
            <div className="mt-4 w-full">
              <AuthForm />
              <div
                className=" flex flex-col sm:flex-row gap-5 sm:gap-2 justify-center text-sm mt-12 sm:mt-4 px-2 text-gray-500"
              >
                <div className="text-secondary text-center font-lato ">
                  Don&apos;t have an account?
                </div>
                <button
                  className=" text-blue-500 cursor-pointer "
                >
                  Register here
                </button>
              </div>
            </div>
            <div className="md:hidden flex items-center  mt-12 justify-around">
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
  );
};
export default Home;
