import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import "./Login.css"

const Login = () => {
  const {user, signInUsingGoogle, loginUser} = useAuth();
  
  const location = useLocation();
  const history = useHistory();





    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      alert("login success");
      loginUser(data.email, data.password, location, history);
    };

  return (
    <div className="container  login-container my-5 shadow-lg">
      <h1 className="p-2 ">Please Log in</h1>
      <form className="login-container" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-btn p-2 rounded"
          {...register("email")}
          placeholder="Write your email"
          type="email"
        />
        <br />
        <input
          className="input-btn p-2 rounded"
          {...register("password")}
          placeholder="Write your password"
          type="password"
        />
        <br />
        <input className="btn-submit input-btn btn-primary fs-5 rounded" type="submit" value="Login" />
        <br />
        <button className="btn-submit input-btn btn-primary fs-5 rounded" onClick={signInUsingGoogle}>Google Sign-in</button>
        <br/>
        
        <Link className="p-3" to="/register"><button className="border-0 bg-success bg-opacity-25" style={{fontWeight: 600}}>NEW USER? PLEASE REGISTER</button></Link>
        
        
      </form>
    </div>
  );
};

export default Login;
