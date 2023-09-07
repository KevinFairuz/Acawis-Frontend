/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert, Button } from '@material-tailwind/react';
import { FcGoogle } from 'react-icons/fc';
import bgLogin from '../assets/bgLogin.png';
import Logo from '../assets/Navbar.png';

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Register = () => {
  const [open, setOpen] = React.useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      navigate('/login');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px] rounded-3xl">
        <div className="flex w-full justify-center items-center h-[550px] bg-[#215273] rounded-3xl px-5 z-10">
          <form
            className="max-w-[400x] w-full mx-auto p-10 "
            action=""
            onSubmit={Register}
          >
            <Alert
              variant="gradient"
              open={false}
              icon={<Icon />}
              action={
                <Button
                  variant="text"
                  color="white"
                  size="sm"
                  className="!absolute top-3 right-3"
                  onClick={() => setOpen(false)}
                >
                  Close
                </Button>
              }
            >
              Sorry, something went wrong please try again.
            </Alert>
            <div className="flex justify-center items-center">
              <img
                className="w-[180px] flex items-center"
                src={Logo}
                alt="logo"
              />
            </div>
            <div className="flex justify-center py-1">
              <button>
                <p className="border shadow-lg hover:shadow-xl px-4 py-2 relative flex items-center bg-white rounded-md text-black">
                  <FcGoogle className="mr-3 w-5" /> Continue with Google
                </p>
              </button>
            </div>
            <div className="mt-3 mb-3 grid grid-cols-3 items-center text-[#E0E0E0]">
              <hr className="border-[#E0E0E0]" />
              <p className="text-center">OR</p>
              <hr className="border-[#E0E0E0]" />
            </div>
            <div className="flex flex-col mb-3 ">
              <label>
                <p className="text-white">Username</p>
              </label>
              <input
                className="relative bg-[#215273] p-0.5 px-5 outline-none focus:border-[#215273]"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <hr className="border-[#FEBE32]" />
            </div>
            <div className="flex flex-col mb-3 ">
              <label>
                <p className="text-white">Email</p>
              </label>
              <input
                className="relative bg-[#215273] p-0.5 px-5 outline-none focus:border-[#215273]"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <hr className="border-[#FEBE32]" />
            </div>
            <div className="flex flex-col mb-3">
              <label>
                <p className="text-white">Password</p>
              </label>
              <input
                className="relative bg-[#215273] p-0.5 px-5 outline-none focus:border-[#215273]"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <hr className="border-[#FEBE32]" />
            </div>
            <div className="flex flex-col ">
              <label>
                <p className="text-white">Confirm Password</p>
              </label>
              <input
                className="relative bg-[#215273] p-0.5 px-5 outline-none focus:border-[#215273]"
                type="password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
              />
              <hr className="border-[#FEBE32]" />
            </div>
            <div className="flex justify-center">
              <button className="flex justify-center items-center px-6 py-2 mt-5 bg-[#FEBE32] hover:bg-[#FEBE32] relative text-black rounded-md">
                Sign Up
              </button>
            </div>
            <div className="flex justify-center">
              <p className=" text-center mt-3 text-white">
                Do you have account?
              </p>
              <p className=" text-center mt-3 text-[#FEBE32] pl-2">Sign In</p>
            </div>
          </form>
        </div>
        <div className="w-[650px] h-[550px] hidden md:block -ml-12 z-0">
          <img
            className="w-[550px] h-full rounded-3xl -ml-12"
            src={bgLogin}
            alt="bg"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
