import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { supabase } from "../SupaBaseCLent";
const Signup = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const Navigate = useNavigate()
    const [name, setName] = useState("")

    const handleSingup = async (e)  => {
        e.preventDefault()

        const { data, error } = await supabase.auth.signUp({
            email:Email,
            password:Password,
            options: {
                data: { fullname: name }
            }
        })
       
        if (error) {
            alert(error.message)
            console.error(error.message)
        } else {
            alert("Signup successful! Check your email for confirmation.");
            Navigate('/Login')
        }
    }
    return (
        <div className="flex min-h-screen bg-gray-100 justify-center items-center">
            <div className="flex w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-lg">
                {/* LEFT SIDE - Sign Up Form */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-center mb-2">SIGN UP</h2>
                    <p className="text-gray-500 text-sm text-center mb-6">
                        Create your account and get started today!
                    </p>

                    <form onSubmit={handleSingup} className="space-y-4">
                        <div className="flex items-center bg-gray-100 rounded-lg px-3">
                            <span className="text-gray-400 mr-2">
                                <i className="fa-regular fa-user"></i>
                            </span>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full bg-transparent py-3 focus:outline-none"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex items-center bg-gray-100 rounded-lg px-3">
                            <span className="text-gray-400 mr-2">
                                <i className="fa-regular fa-envelope"></i>
                            </span>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-transparent py-3 focus:outline-none"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex items-center bg-gray-100 rounded-lg px-3">
                            <span className="text-gray-400 mr-2">
                                <i className="fa-solid fa-lock"></i>
                            </span>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full bg-transparent py-3 focus:outline-none"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="flex items-center my-6">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-2 text-gray-400 text-sm">Or Sign Up with</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <div className="space-y-3">
                        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
                            <img
                                src="https://www.svgrepo.com/show/355037/google.svg"
                                alt="Google"
                                className="w-5 h-5"
                            />
                            <span className="text-sm font-medium">Sign Up with Google</span>
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
                            <img
                                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                                alt="Facebook"
                                className="w-5 h-5"
                            />
                            <span className="text-sm font-medium">Sign Up with Facebook</span>
                        </button>
                    </div>

                    <p className="text-center text-gray-600 mt-6 text-sm">
                        Already have an account?{" "}
                        <Link to="/login" className="text-indigo-600 font-medium hover:underline">
                            Login
                        </Link>
                    </p>
                </div>

                {/* RIGHT SIDE - Banner */}
                <div className="hidden md:flex w-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 justify-center items-center relative p-6">
                    <div className="bg-white/10 p-6 rounded-2xl text-white max-w-xs text-center">
                        <p className="text-lg font-semibold mb-4">
                            Welcome! Start your journey with us today 🚀
                        </p>
                        <img
                            src="https://img.freepik.com/free-photo/smiling-woman-holding-digital-tablet_23-2148886577.jpg"
                            alt="Sign Up"
                            className="rounded-2xl w-64 h-auto object-contain mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
