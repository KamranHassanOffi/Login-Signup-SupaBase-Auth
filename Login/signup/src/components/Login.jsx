import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../SupaBaseCLent";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const Navigate = useNavigate();

  const HandleLogin = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email: Email,
      password: Password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      alert("Login successful!");
      Navigate("/");
    }
  };

  const HandleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173",
      },
    });
    if (error) setErrorMsg(error.message);
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-gradient-to-br from-[#1a0033] via-[#7b2ff7] to-[#f107a3]">
      <div className="flex w-full max-w-5xl bg-white/20 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white/30">
        {/* LEFT SIDE - Login Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-white">
          <h2 className="text-3xl font-bold text-center mb-2">LOGIN</h2>
          <p className="text-gray-200 text-sm text-center mb-6">
            Welcome back! Log in to continue 🚀
          </p>

          <form onSubmit={HandleLogin} className="space-y-4">
            <div className="flex items-center bg-white/20 rounded-lg px-3">
              <span className="text-gray-200 mr-2">
                <i className="fa-regular fa-envelope"></i>
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent py-3 focus:outline-none text-white placeholder-gray-300"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center bg-white/20 rounded-lg px-3">
              <span className="text-gray-200 mr-2">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent py-3 focus:outline-none text-white placeholder-gray-300"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {errorMsg && (
              <p className="text-red-300 text-sm mt-1 mb-1 text-left">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition cursor-pointer"
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-400/40"></div>
            <span className="mx-2 text-gray-300 text-sm">Or Login with</span>
            <div className="flex-grow border-t border-gray-400/40"></div>
          </div>

          <div className="space-y-3">
            <button
              onClick={HandleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 border border-white/40 py-2 rounded-lg hover:bg-white/10 transition cursor-pointer"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium text-white">
                Login with Google
              </span>
            </button>
            <button className="w-full flex items-center justify-center gap-2 border border-white/40 py-2 rounded-lg hover:bg-white/10 transition cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium text-white">
                Login with Facebook
              </span>
            </button>
          </div>

          <p className="text-center text-gray-200 mt-6 text-sm">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-white font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>

        {/* RIGHT SIDE - Banner */}
        <div className="hidden md:flex w-1/2 bg-white/10 justify-center items-center relative p-6">
          <div className="bg-white/20 p-6 rounded-2xl text-white max-w-xs text-center backdrop-blur-md border border-white/20">
            <p className="text-lg font-semibold mb-4">
              Welcome back! We missed you 💜
            </p>
            <img
              src="https://img.freepik.com/free-photo/smiling-woman-holding-digital-tablet_23-2148886577.jpg"
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
