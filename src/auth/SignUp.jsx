import React from "react";
import { useForm } from "react-hook-form";




const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <main className="main-wrapper ">
        <div className="container mx-auto pt-6 pb-10 px-8 md:pl-20 md:flex gap-15">
          <h1 className="text-white">logo</h1>
          <form className="bg-white p-8" onSubmit={handleSubmit(onSubmit)}>
            <h3>Get started</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className="py-4 md:flex gap-4">
              <input
                type="text"
                name=""
                id=""
                placeholder="first name"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && <span>first name is required</span>}
  
              <input type="text" name="" id="" placeholder="last name" />
            </div>
            <div className="py-3">
              <input
                className="w-full"
                type="email"
                name=""
                id=""
                placeholder="email"
              />
            </div>
            <div className="py-3">
              <input
                className="w-full"
                type="password"
                name=""
                id=""
                placeholder="password"
              />
            </div>
            <div className="py-3">
              <input
                className="w-full"
                type="password"
                name=""
                id=""
                placeholder="confirm password"
              />
            </div>
  
            <button className="btn btn-primary w-full">Primary</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default SignUp
