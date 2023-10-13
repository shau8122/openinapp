"use client";

import Button from "./Button";
import Input from "./Input";
import { useCallback, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

const AuthForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
 


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
  };
  return (
    <div
    // mt-8
      className="
        sm:mx-auto
        sm:w-full
        sm:max-w-md
    "
    >
      <div
        // shadow
        className="
        bg-white
        p-5 pt-10
        rounded-xl
        sm:rounded-lg
        sm:px-10
      "
      >
        <form className="space-y-3" 
        onSubmit={handleSubmit(onSubmit)}
        >
          
          <Input
            label="Email Address"
            id="email"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <button className="font-lato text-[16px] text-[#346BD4]">
            Forgot Password?
          </button>
          <div className="">
            <Button disabled={isLoading} fullWidth type="submit">
              Sign In
            </Button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default AuthForm;
