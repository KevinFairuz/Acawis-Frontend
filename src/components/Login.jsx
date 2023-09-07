/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Register from './Register';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import bgLogin from '../assets/bgLogin.png';
import Logo from '../assets/Navbar.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login', {
        email: email,
        password: password,
      });
      navigate('/');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px] rounded-3xl">
        <div className="w-[750px] h-[550px] hidden md:block ">
          <img className="w-full h-full rounded-3xl" src={bgLogin} alt="bg" />
        </div>
        <div className="flex w-full justify-center items-center h-[550px] bg-[#215273] rounded-3xl px-5">
          <form
            onSubmit={Auth}
            className="max-w-[400x] w-full mx-auto p-10 "
            action=""
          >
            <p>{msg}</p>
            <div className="flex justify-center items-center -mt-5">
              <img
                className="w-[180px] flex items-center"
                src={Logo}
                alt="logo"
              />
            </div>
            <div className="flex justify-center py-3">
              <button>
                <p className="border shadow-lg hover:shadow-xl px-4 py-2 relative flex items-center bg-white rounded-md text-black">
                  <FcGoogle className="mr-3 w-5" /> Continue with Google
                </p>
              </button>
            </div>
            <div className="mt-4 mb-4 grid grid-cols-3 items-center text-[#E0E0E0]">
              <hr className="border-[#E0E0E0]" />
              <p className="text-center">OR</p>
              <hr className="border-[#E0E0E0]" />
            </div>
            <div className="flex flex-col mb-4 ">
              <label>
                <p className="text-white">Username / Email</p>
              </label>
              <input
                className="relative bg-[#215273] p-1 px-5 outline-none focus:border-[#215273]"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <hr className="border-[#FEBE32]" />
            </div>
            <div className="flex flex-col ">
              <label>
                <p className="text-white">Password</p>
              </label>
              <input
                className="relative bg-[#215273] p-1 px-5 outline-none focus:border-[#215273]"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <hr className="border-[#FEBE32]" />
            </div>
            <div className="flex justify-betwen mt-3 mb-3 text-white">
              <p className="relative flex items-center w-3/5">
                <input className="mr-2" type="checkbox" />
                Remember Me
              </p>
              <p className="relative flex items-center w-2/5">
                Forgot password?
              </p>
            </div>
            <div className="flex justify-center">
              <button className="flex justify-center items-center px-6 py-2 mt-3 bg-[#FEBE32] hover:bg-[#FEBE32] relative text-black rounded-md">
                Sign In
              </button>
            </div>
            <div className="flex justify-center">
              <p className=" text-center mt-5 text-white">Want to join?</p>
              <a href="">
                <p className=" text-center mt-5 text-[#FEBE32] pl-2">Sign Up</p>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
