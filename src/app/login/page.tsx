"use client"
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    toast('Logging in. Please wait...');

    try {
      // Simulate asynchronous operation (replace with actual login logic)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success('Login successful!', {
        position: toast.POSITION.TOP_CENTER,
      });
      // Redirect or perform other actions after successful login
    } catch (error:any) {
      toast.error(`Login failed because ${error.message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
      setEmail('');
      setPassword('');
    }
  };

  const handleForgotPassword = async (e: any) => {
    e.preventDefault();
    toast('Resetting password. Please wait...');

    try {
      // Simulate asynchronous operation (replace with actual password reset logic)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success('Password reset successful! Check your email for instructions.', {
        position: toast.POSITION.TOP_CENTER,
      });
      setForgotPassword(false);
    } catch (error:any) {
      toast.error(`Password reset failed because ${error.message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
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
            {forgotPassword ? 'Reset Password' : 'Sign into your account'}
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {forgotPassword ? (
            <form className="space-y-6" onSubmit={handleForgotPassword}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Enter Email"
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
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#ac476c] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#8F3A59] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Reset Password
                </button>
                <button
                  onClick={() => setForgotPassword(false)}
                  className="flex w-full justify-center mt-3 rounded-md bg-[#ac476c] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#8F3A59] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Back to Login
                </button>
              </div>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Enter Email"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ac476c] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="mt-2 relative rounded-md shadow-sm">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>

                <div className="flex items-center justify-between">
                  <input
                  minLength={6}
                    placeholder="Enter Password"
                    id="password"
                    name="password"
                    type={passwordVisible ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#ac476c] sm:text-sm sm:leading-6 pr-10"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 mt-6 flex items-center">
                    <button
                      type="button"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                      className="text-gray-400 hover:text-[#ac476c] focus:outline-none focus-visible:ring focus-visible:border-[#ac476c]"
                    >
                      {passwordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  onClick={() => setForgotPassword(true)}
                  className="font-semibold text-[#ac476c] hover:text-[#ac476c]"
                >
                  Forgot password?
                </a>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#ac476c] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#8F3A59] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign In
                </button>
              </div>
            </form>
          )}
          <p className="mt-10 text-center text-sm text-gray-500">
            {!forgotPassword ? (
              <>
                Do not have an account?{' '}
                <a href="/register" className="font-semibold leading-6 text-[#ac476c] hover:text-[#8F3A59]">
                  Register
                </a>
              </>
            ) : (
              <>
                Remember your password?{' '}
                <button
                  onClick={() => setForgotPassword(false)}
                  className="font-semibold leading-6 text-[#ac476c] hover:text-[#8F3A59] focus:outline-none"
                >
                  Return to Login
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </>
  );
}
