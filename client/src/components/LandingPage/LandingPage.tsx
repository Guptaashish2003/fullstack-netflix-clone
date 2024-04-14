import React,{useState} from "react";
import LandingNav from "./LandingNav";
import { FaAngleRight } from "react-icons/fa";
import Button from "../tools/Button";
import { useForm,SubmitHandler, set } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";


const schema = yup.object().shape({
  email: yup.string()
    .required("Email is required")
    .email("Email is not valid")
    .max(80 , "Email is too long")
    .matches(/^\S+@\S+$/i , "Email is not valid"),
  password: yup.string()
    .required("Password is required")
    .min(8 , "Password is too short")
    .max(16 , "Password is too long")
    
});

interface IFormInput {
  email: string;
  password: string;
}

const LandingPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [forPassword, setForPassword] = useState("");
  const { register, handleSubmit,formState:{errors} } = useForm<IFormInput>({resolver: yupResolver(schema)});
  const handleEmailNext = () => {
    // Add any logic here if needed
    if(errors.email){
      setForPassword("")
      setShowPassword(false);

    }
    else{
      setForPassword("hidden")
      setShowPassword(true);
    }
  };
  console.log(showPassword)
  // if(!errors.email){

  // }
  
  const onSubmit: SubmitHandler<IFormInput> = (data) =>{ 
    console.log(data);
    localStorage.setItem("email" , data.email);
    navigate("/home");
  }
 
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        className="h-[100vh]"
      >
        <LandingNav />
        <div className="backgoundImage   " />
        <div className="flex flex-col mb-8 w-full  gap-y-3 tracking-wide justify-center items-center h-[60vh]">
          <p className="text-white text-6xl font-bold ">
            Unlimited movies, TV shows and more
          </p>
          <p className="text-white text-3xl font-semibold">
            Watch your favorite movies and TV shows{" "}
          </p>
          <p className="text-white text-2xl font-semibold">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 mt-4 w-1/2 justify-center items-center">
          <div className={`w-3/5 ${forPassword}`}>
            <input
              type="text"
              className="w-full text-2xl h-20 p-4 bg-transparent rounded-md border-2 border-white text-white"
              placeholder="Email address"
              {...register("email")}
            />
            <p className="text-xl text-gray-50">{errors.email?.message}</p>
          </div>
          {showPassword && !errors.email ?(
            <div className="w-3/5">
              <input
                type="password"
                className="w-full text-2xl h-20 p-4 bg-transparent rounded-md border-2 border-white text-white"
                placeholder="Password"
                {...register("password")}
              />
              <p className="text-xl text-gray-50">{errors.password?.message}</p>
            </div>
          ):""}
          <Button
            icons={<FaAngleRight />}
            value={showPassword && !errors.email ? "Submit" : "Get Started"}
            className="h-20 w-60 text-3xl bg-red-700 text-white rounded-md"
            onClick={showPassword ? undefined : handleEmailNext}
          />
        </form>
        </div>
      </div>

      {/* make after pages like attach videos and other thinghs */}
    </>
  );
};

export default LandingPage;
