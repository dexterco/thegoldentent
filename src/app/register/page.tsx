"use client"
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export default function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
const handleRegistartion = (e:any)=>{
  e.preventDefault();
  toast("Registering Please Wait...");
   try {
    toast.success("Account is succesfully created!", {
      position: toast.POSITION.TOP_CENTER
    });
   } catch (e:any) {
    toast.error(`Registration Failed beacuse ${e.message}`, {
      position: toast.POSITION.TOP_CENTER
    });
   }finally{
     setName('')
     setEmail('')
     setPassword('')
   }
}

  return (
    <>
    <ToastContainer />
      <div  className="flex min-h-full flex-1 flex-col  justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto"
            src="/assets/logo.png"
            alt="Logo"
            height={200}
            width={200}
            priority
          />
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleRegistartion}>

            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                value={name}
                onChange={e => setName(e.target.value)}
                  placeholder='Enter Name'
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ac476c] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                  placeholder='Enter Email'
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ac476c] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2 relative rounded-md shadow-sm">
                <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                  minLength={6}
                  placeholder='Enter Password'
                  id="password"
                  name="password"
                  type={passwordVisible ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ac476c] sm:text-sm sm:leading-6 pr-10"
                />
                <div className="absolute inset-y-0 right-0 pr-3  flex items-center">
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="text-gray-400 hover:text-[#ac476c] focus:outline-none focus-visible:ring focus-visible:border-[#ac476c]"
                  >
                    {passwordVisible ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#ac476c] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#8F3A59] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <a href="/login" className="font-semibold leading-6 text-[#ac476c] hover:text-[#8F3A59]">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
