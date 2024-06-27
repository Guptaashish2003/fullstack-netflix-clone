import React from "react";
import Button from "../components/tools/Button";
import InputButton from "../components/tools/InputButton";
import { FaAngleRight } from "react-icons/fa";
import { useForm,SubmitHandler, set } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";


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



const SignIn = () => {
    const navigate = useNavigate();
    const { register, handleSubmit,formState:{errors} } = useForm<IFormInput>({resolver: yupResolver(schema)});

    const onSubmit: SubmitHandler<IFormInput> = async (data) =>{ 
        try {
            const res = await axios.post("/auth/login",data);
            
            
            if(res.status === 200){
                console.log("login success");
                navigate("/home");
              }
              
            } catch (error) {
              console.log(error)
              // navigate("/home");

        }
      
     
    
    }
  return (
   <>
      <div className="backgoundImage   " />
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      className="h-1/4 w-1/3 max-sm:w-full max-sm:mt-44 justify-center items-center md:mt-52 max-sm:h-[40vh] m-auto  "
    >
        <p className="text-white pl-2 text-3xl py-3">Sign In</p>
      <div className="w-full flex flex-col  justify-center items-center m-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center items-center gap-y-4 p-2 max-sm:mt-6 " >
        <input
              type="email"
              className="w-full text-xl h-12 p-4 bg-transparent rounded-md border-2 border-white text-white"
              placeholder="Email address"
              {...register("email")}
            />
            <p className="text-xl text-gray-50">{errors.email?.message}</p>
            <input
                type="password"
                placeholder="Password"
                className="w-full text-xl h-12 p-4 bg-transparent rounded-md border-2 border-white text-white"
                {...register("password")}
            />
            <p className="text-xl text-gray-50">{errors.password?.message}</p>
            <Button
                icons={<FaAngleRight />}
                value={"Sign In"}
                className=" p-3 w-full text-xl bg-red-700 text-white rounded-md"
                // onClick={showPassword ? undefined : handleEmailNext}
            />
        
        </form>
        <p className="text-white text-lg w-full text-start px-3 py-4">
            Don't have an account?{" "}
            <span
                className="text-blue-500 text-start cursor-pointer"
                onClick={() => navigate("/SignUp")}
            >
                Sign up
            </span>
        </p>

       
      </div>
    </div>
   </>
  );
};

export default SignIn;
