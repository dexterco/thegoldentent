// Import necessary dependencies
"use client";
import { useAppSelector } from '@/redux-toolkit/hooks';
import { RootState } from '@/redux-toolkit/store';
import { signUpWithEmail } from '@/services/User Firebase/handleAuth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// Define the Register component
export default function Register() {
  // Initialize state variables
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()
  const user = useAppSelector((state: RootState) => state.user)
  useEffect(()=>{
      if(user.uid){
        //route to dashboard
         router.push('/')
      }
  },[])

  // Function to handle user registration
  const handleRegistration = async (e: any) => {
    e.preventDefault();
    toast("Registering Please Wait...");

    try {
      // Call the signUpWithEmail function to handle user registration
      const { error } = await signUpWithEmail(email, password, name, "");

      if (error) {
        // If there is an error, display an error toast
        toast.error(`Registration Failed because ${error.code}`, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        // If registration is successful, display a success toast
        toast.success("Account is successfully created!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (e) {
      // Handle unexpected errors
      console.error(e);
      toast.error("Unexpected error during registration", {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
      // Reset form fields
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  // Return the JSX for the Register component
  return (
    <>
      <ToastContainer />
      {/* Main container with flex layout */}
      <div className="flex min-h-full items-center justify-center px-6 py-12 lg:px-8">
        {/* Left side with the image */}
        <div className="hidden lg:block lg:w-1/2">
          <Image
            src="/assets/register.svg"
            alt="Register"
            width={600}
            height={600}
          />
        </div>
        {/* Right side with the form */}
        <div className="mx-auto w-full max-w-sm flex items-center justify-center">
         
          <div className="w-full">
            
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create your new account
            </h2>
            <p className='text-center'>Adventure starts here 🚀</p>
            {/* Form for user registration */}
            <form className="mt-10 space-y-6" onSubmit={handleRegistration}>
              {/* Name input field */}
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
              {/* Email input field */}
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
              {/* Password input field */}
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
              {/* Register button */}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#ac476c] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#8F3A59] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              </div>
            </form>
            {/* Link to the login page */}
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <a href="/login" className="font-semibold leading-6 text-[#ac476c] hover:text-[#8F3A59]">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
