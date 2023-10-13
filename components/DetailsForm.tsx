import { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";

interface DetailsFormProps {
  formText: string;
  setFormText: (text: string) => void;
  setProfileData: (data: FieldValues) => void;
  handleClick: () => void;
}

const DetailsForm: React.FC<DetailsFormProps> = ({ handleClick,formText, setFormText,setProfileData }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      instagram: "",
      youtube: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (formText === 'basic') {
      setFormText("social");
    } else {
      console.log(data);
      setProfileData(data);
      handleClick();
    }
  };
  return (
    <div className="w-full text-black mt-5">
      {formText === 'basic' ? (
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Enter Name*"
            id="name"
            register={register}
            errors={errors}
            disabled={isLoading}
            required
            placeholder="Eg. John Doe"
          />
          <Input
            label="Enter Email*"
            id="email"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
            required
            placeholder="Eg. John@xyz.com"
          />
          <Input
            label="Enter Phone*"
            id="phone"
            type="text"
            register={register}
            errors={errors}
            disabled={isLoading}
            required
            placeholder="Eg. 9123456789"
          />
          <div className="flex justify-end items-end pt-10 pb-5">
            <Button type="submit" disabled={isLoading}>Done</Button>
          </div>
        </form>
      ) : (
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Instagram Link (Optional)"
            id="instagram"
            register={register}
            errors={errors}
            disabled={isLoading}
            placeholder="Eg. ..instagram.com/username"
          />
          <Input
            label="Youtube Link (Optional)"
            id="youtube"
            type="text"
            register={register}
            errors={errors}
            disabled={isLoading}
            placeholder="Eg. ..youtube.com/username"
          />
          <div className="flex justify-end items-end pt-10 pb-5 gap-2">
            <Button onClick={() => setFormText("basic")} disabled={isLoading}>Back</Button>
            <Button 
             type="submit"
              disabled={isLoading}>Done</Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default DetailsForm;
