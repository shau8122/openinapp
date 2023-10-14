"use client";
import Image from "next/image";
import discordLogo from "@/public/images/discordLogo.svg";
import githubLogo from "@/public/images/githubLogo.svg";
import linkedinLogo from "@/public/images/linkedinLog.svg";
import twitterLogo from "@/public/images/twitterLogo.svg";
import googleIcon from "@/public/Icon/googleIcon.svg";
import appleIcon from "@/public/Icon/appleIcon.svg";
import AuthForm from "@/components/AuthForm";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    <main className="h-screen w-screen relative overflow-hidden bg-[#F8FAFF] ">
      <div className="bg-gradient-blue w-full h-1/2  md:w-1/2 md:h-full md:absolute md:top-0 md:left-0 md:transform md:-translate-x-20 md:-skew-x-6">
        <div className="block md:hidden ">
          <div className="w-full h-1/4 flex justify-center items-center text-white font-poppins text-xl font-bold leading-relaxed tracking-wide pt-20">
            LOGO
          </div>
          <div className="text-white text-center flex justify-center items-center h-1/2 font-montserrat text-7xl font-bold leading-normal mt-20">
            Board.
          </div>
          <div className=" flex items-center justify-around mt-28">
            <Image className="cursor-pointer " src={githubLogo} alt="githubLogo" />
            <Image className="cursor-pointer " src={twitterLogo} alt="githubLogo" />
            <Image className="cursor-pointer " src={discordLogo} alt="githubLogo" />
            <Image
              className="cursor-pointer "
              src={linkedinLogo}
              alt="githubLogo"
            />
          </div>
        </div>
      </div>
    <div className="hidden md:block">
    <div className="text-white absolute font-poppins text-xl font-bold leading-relaxed tracking-wide ml-20 mt-20">
        LOGO
      </div>
      <div className="text-white absolute left-1/4 transform -translate-x-[75%] -translate-y-[50%] top-1/2 font-montserrat text-7xl font-bold leading-normal">
        Board.
        {/* <SlantedComponent/> */}
      </div>
      <div className=" absolute bottom-10 left-[10%] w-[20%] flex items-center justify-between">
        <Image className="cursor-pointer " src={githubLogo} alt="githubLogo" />
        <Image className="cursor-pointer " src={twitterLogo} alt="githubLogo" />
        <Image className="cursor-pointer " src={discordLogo} alt="githubLogo" />
        <Image
          className="cursor-pointer "
          src={linkedinLogo}
          alt="githubLogo"
        />
      </div>
    </div>
    <div className="">
      <div className="md:w-1/2 w-full md:h-full h-1/2 flex justify-center items-center md:absolute top-0 right-0 text-black">
        <div className="w-[450px] h-3/4 flex flex-col justify-center  p-10 ">
          <h1 className=" text-4xl font-bold font-montserrat">Sign in</h1>
          <p className=" font-lato text-base font-normal leading-normal">
            sign in to your account
          </p>
          <div className="flex justify-between items-center w-full gap-2 mt-4">
            <div className="flex justify-center items-center bg-white py-1 px-4 gap-2 rounded-md ">
              <Image src={googleIcon} alt="google Icon" />
              <button
                onClick={() => signIn("google")}
                className="text-secondary text-center font-montserrat text-xs font-normal leading-normal"
              >
                Sign in with Google
              </button>
            </div>
            <div className="flex justify-center gap-2 py-1 px-4 bg-white items-center rounded-md ">
              <Image src={appleIcon} alt="apple Icon" />
              <p className="text-secondary text-center font-montserrat text-xs font-normal leading-normal">
                Sign in with Apple
              </p>
            </div>
          </div>
          <div className="mt-4 w-full">
            <AuthForm />
            <div
              className="
            flex
            gap-2
            justify-center
            text-sm
            mt-4
            px-2
            text-gray-500
        "
            >
              <div className="text-secondary text-center font-lato ">
                Don&apos;t have an account?
              </div>
              <button
                className=" text-blue-500 cursor-pointer
          "
              >
                Register here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
};
export default Home;
