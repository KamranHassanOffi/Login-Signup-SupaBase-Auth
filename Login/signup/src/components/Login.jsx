import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../SupaBaseCLent";


const Login = () => {
  const [Email,setEmail]=useState("")
  const [Password,setPassword]=useState("")
  const Navigate= useNavigate()

  const HandleLogin= async (e) =>{
    e.preventDefault()
    
    const{ data, error} = await supabase.auth.signInWithPassword({
      email:Email,
      password:Password
     
    })
    if (error){
      console.error(error.message)
      alert(error.message)
    }else{
      alert("login succesfully")
      Navigate('/')
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100 justify-center items-center">
      <div className="flex w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-lg">
        {/* LEFT SIDE - Login Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-2">LOGIN</h2>
          <p className="text-gray-500 text-sm text-center mb-6">
            How to i get started lorem ipsum dolor at?
          </p>

          <form onSubmit={HandleLogin} className="space-y-4">
            <div className="flex items-center bg-gray-100 rounded-lg px-3">
              <span className="text-gray-400 mr-2">
                <i className="fa-regular fa-user"></i>
                
              </span>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) =>setEmail(e.target.value)}
                className="w-full bg-transparent py-3 focus:outline-none"
              />
            </div>
            <div className="flex items-center bg-gray-100 rounded-lg px-3">
              <span className="text-gray-400 mr-2">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input
                type="password"
                placeholder="Password"
                onChange={(e)=> setPassword(e.target.value)}
                className="w-full bg-transparent py-3 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition cursor-pointer"
            >
              Login Now
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-400 text-sm">Login with Others</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium">Login with Google</span>
            </button>
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium cursor-pointer">Login with Facebook</span>
            </button>
            <p className="text-center text-gray-600 mt-6 text-sm">
              Don't Have An Account?{" "}
              <Link to="/signup" className="text-indigo-600 font-medium hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Banner */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 justify-center items-center relative p-6">
          <div className="bg-white/10 p-6 rounded-2xl text-white max-w-xs text-center">
            <p className="text-lg font-semibold mb-4">
              Very good works are waiting for you Login Now!!!
            </p>
            <img
              src="pic1.png"
              alt="Login"
              className="rounded-2xl w-64 h-auto object-contain mx-auto"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
