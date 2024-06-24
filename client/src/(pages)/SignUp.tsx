import Button from "../components/tools/Button";
import { FaAngleRight } from "react-icons/fa";
import { useForm,SubmitHandler, set } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios,{AxiosResponse} from "axios";


const schema = yup.object().shape({
  email: yup.string()
    .required("Email is required")
    .email("Email is not valid")
    .max(80 , "Email is too long")
    .matches(/^\S+@\S+$/i , "Email is not valid"),
  password: yup.string()
    .required("Password is required")
    .min(8 , "Password is too short")
    .max(16 , "Password is too long"),
    name: yup.string()
    .required("Name is required")
    .min(3 , "Name is too short")
    .max(16 , "Name is too long")
    
});

interface IFormInput {
    name: string;
  email: string;
  password: string;
}



const SignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit,formState:{errors} } = useForm<IFormInput>({resolver: yupResolver(schema)});

    const onSubmit: SubmitHandler<IFormInput> = async (data) =>{ 
      try {
        const res:AxiosResponse = await axios.post(`/auth/register` , data);
        if(res.status === 200){
            console.log(res.data);
            navigate("/SignIn");
        }

        return res.data;
        
      } catch (error) {
        // navigate("/");
        console.log(error)       
      }
    }
    return (
        <>
      <div  className="backgoundImage   " />
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
      className="h-1/3 w-1/3 max-sm:w-full max-sm:mt-44 justify-center items-center md:mt-48 max-sm:h-[39vh] m-auto   "
    >
        <p className="text-white pl-2 text-3xl py-3">Sign Up</p>
      <div className="w-full flex flex-col justify-center items-center m-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center items-center gap-y-4 p-2 max-sm:mt-6 " >
            
        <input
              type="text"
              className="w-full text-xl h-12 p-4 bg-transparent rounded-md border-2 border-white text-white"
              placeholder="Full Name"
              {...register("name")}
            />
            <p className="text-xl text-gray-50">{errors.name?.message}</p>
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
                value={"Sign Up"}
                className=" p-3 w-full text-xl bg-red-700 text-white rounded-md"
                // onClick={showPassword ? undefined : handleEmailNext}
            />
        
        </form>
        <p className="text-white text-lg w-full text-start px-3 py-4">
            Already have account{" "}
            <span
                className="text-blue-500 text-start cursor-pointer"
                onClick={() => navigate("/SignIn")}
            >
                Sign in
            </span>
        </p>

       
      </div>
    </div>
   </>
      );
    };

export default SignUp