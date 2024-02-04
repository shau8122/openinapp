"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AuthForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(values);
    router.push("/upload");
    if (values.email !== "" && values.password !== "") {
      // do something
      setIsLoading(true);
      
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="pt-8 rounded-xl sm:rounded-lg">
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div className="">
          <label
            htmlFor="email"
            className=" block text-sm font-lato font-medium leading-6"
          >
            Email Address
          </label>
          <div className="mt-2">
            <input
              id="email"
              type="email"
              autoComplete="email"
              disabled={isLoading}
              placeholder=""
              onChange={handleChange}
              className={` px-3 block w-full bg-background rounded-lg font-lato border-0 focus:border-0 active:border-0 py-1.5 text-lg text-black sm:text-sm sm:leading-6 
              ${isLoading && "ocupacity-50 cursor-default"}`}
            />
          </div>
        </div>

        <div className="">
          <label
            htmlFor="password"
            className="
          block
          text-sm font-lato
          font-medium
          leading-6
        "
          >
            Password
          </label>
          <div className="mt-2">
            <input
              id="password"
              type="password"
              autoComplete="password"
              disabled={isLoading}
              placeholder=""
              onChange={handleChange}
              className={` px-3 block w-full bg-background rounded-lg font-lato border-0 focus:border-0 active:border-0 py-1.5 text-lg text-black sm:text-sm sm:leading-6 &{errors[id] && "focus:ring-rose-500"} ${isLoading && "ocupacity-50 cursor-default"}`}
            />
          </div>
        </div>
        <button className="font-lato text-[16px] text-[#346BD4]">
          Forgot Password?
        </button>
        <div className="">
          <button
            type="submit"
            disabled={isLoading }
            className={`
            flex
            justify-center
            rounded-md
            px-3
            py-2
            text-[16px]
            font-bold font-montserrat
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            bg-[#605BFF]
            text-white
            hover:bg-blue-600 focus-visible:bg-blue-600  ${
              isLoading && "opacity-50 cursor-default"
            },
            w-full`}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
