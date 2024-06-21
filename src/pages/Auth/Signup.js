import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../../components/shared/Input";
import Radio from "../../components/shared/Radio";
import useSignup from "../../hooks/useSignup"
const inputFields = [
  { label: "Email", type: "text", name: "email", placeholder: "Email" },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Password",
  },
];
const role = [
  { label: "Admin", value: "admin" },
  { label: "Doctor", value: "doctor" },
  { label: "Patient", value: "patient" },
];
const Signup = () => {
  const navigate = useNavigate();
  const { signup, loading} = useSignup()                 
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      
      signup(data)
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] flex  justify-center items-center bg-[#F5F6FA]">
      <div className=" card bg-white px-2 py-6 lg:w-1/3 md:w-1/2 w-full">
        <h1 className="text-center font-bold text-2xl">Sign Up</h1>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            {inputFields.map((field) => (
              <Input
                key={field.name}
                label={field.label}
                type={field.type}
                register={register(field.name, {
                  required: `${field.label} is required`,
                })}
                placeholder={field.placeholder}
                error={errors[field.name]}
              />
            ))}
            <Radio
              label="Select Role"
              options={role}
              register={register("role", { required: "Role is required" })}
              error={errors.role}
            />
            <input
              type="submit"
              className="w-full bg-[#06CA8C] hover:bg-[#059476] text-[#ffffff] cursor-pointer p-2 mt-5"
            />
          </form>
        </div>
        <div className="text-center mt-5">
          <span>
            Already Have an Account ?
            <Link className="text-red-500 cursor-pointer" to="/login">
              Log in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
