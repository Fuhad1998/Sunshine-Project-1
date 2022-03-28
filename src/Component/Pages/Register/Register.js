import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data.name);
    console.log(data);
    alert("Register successful");
  };
  return (
    <div className="container  login-container my-5 shadow-lg">
      <h1>Please Register</h1>
      <form className="login-container" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-btn p-2 rounded"
          {...register("name")}
          placeholder="Write your name"
        />
        <br />
        <input
          className="input-btn p-2 rounded"
          {...register("email")}
          placeholder="Write your email"
        />
        <br />
        <input
          className="input-btn p-2 rounded"
          type="password"
          {...register("password")}
          placeholder="Write your password"
        />
        <br />
        <input
          className="btn-submit input-btn btn-primary fs-5 rounded"
          type="submit"
          value="Register"
        />
        <br />
        <Link className="" to="/login">
          <button
            className="border-0 bg-success bg-opacity-25"
            style={{ fontWeight: 600 }}
          >
            ALREADY REGISTERED? PLEASE LOG-IN
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
