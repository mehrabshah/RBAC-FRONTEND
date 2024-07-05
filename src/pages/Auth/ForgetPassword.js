import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/shared/Input";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useForgetPassword  from "../../hooks/useForgetPassword";

const inputFields = [
  { label: "Email", type: "text", name: "email", placeholder: "example@gmail.com" },
];

export const ForgetPassword = () => {
  const navigate = useNavigate();
  const { forgetpassword , loading } = useForgetPassword();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await forgetpassword(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-[100%] h-[100vh] flex  justify-center items-center bg-[#F5F6FA]">
      <div className=" card bg-white px-2 py-6  w-full max-w-md">
        <h1 className="text-center font-bold text-2xl">Enter Email Address</h1>
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
             <div className="flex flex-row justify-center">
              <Link className=" cursor-pointer  font-light text-sm mt-2  text-center" to="/login">
                 Back to sign in
              </Link>
              </div>
            <input
              type="submit"
              className="w-full bg-[#06CA8C] hover:bg-[#059476] text-[#ffffff] cursor-pointer p-2 mt-5"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
