"use client";
import { useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { passwordReset, signInWithEmail } from '@/services/User Firebase/handleAuth';
import { useAppDispatch, useAppSelector } from '@/redux-toolkit/hooks';
import { addUser } from '@/features/User/userSlice';
import { useRouter } from 'next/navigation'; 
import { RootState } from '@/redux-toolkit/store';

export default function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useAppSelector((state: RootState) => state.user)
  useEffect(()=>{
      if(user.uid){
        //route to dashboard
         router.push('/')
      }
  },[])

  const handleLogin = async (e: any) => {
    e.preventDefault();
    toast('Logging in. Please wait...');

    try {
      // Call the signInWithEmail function to handle authentication
      const { result1, error } = await signInWithEmail(email, password);

      if (error) {
        // If there is an error, display an error toast
        toast.error(`Login failed because ${error.code}`, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        // If login is successful, display a success toast
        toast.success('Login successful!', {
          position: toast.POSITION.TOP_CENTER,
        });

        // Redirect or perform other actions after successful login
        // For example, you can navigate to a different page or update the UI
        dispatch(addUser(result1));
        router.push('/Profile');
      }
    } catch (error) {
      // Handle unexpected errors
      console.error(error);
      toast.error('Unexpected error during login', {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
      // Reset form fields
      setEmail('');
      setPassword('');
    }
  };

  const handleForgotPassword = async (e: any) => {
    e.preventDefault();
    toast('Resetting password. Please wait...');

    try {
      // Call the passwordReset function to initiate the password reset process
      const { error } = await passwordReset(email);

      if (!error) {
        // If there is an error, display an error toast
        toast.success('Password reset email sent successfully!', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      // Handle unexpected errors
      console.error(error);
      toast.error('Unexpected error during password reset', {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
      // Reset form fields or perform other necessary actions
      setEmail('');
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex min-h-full items-center justify-center px-6 py-12 lg:px-8">
        {/* Left side with the image */}
        <div className="hidden lg:block lg:w-1/2">
          {forgotPassword ? (
            <Image
              src="/assets/forgotpassword.svg"
              alt="Forgot Password"
              width={600}
              height={600}
            />
          ) : (
            <Image
              src="/assets/loginpage.svg"
              alt="Login Page"
              width={600}
              height={600}
            />
          )}
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
       
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {forgotPassword ? 'Reset Password' : 'Welcome to The Golden Tent! 👋'}
          </h2>
          {forgotPassword ? (
            <><p className='text-center'>Password reset email sent to you to reset yoour password</p>
            <form className="mt-10 space-y-6" onSubmit={handleForgotPassword}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
            </>
          ) : (
            <>
            <p className='text-center'>Please sign-in to your account and start the adventure</p>
            <form className="mt-10 space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
            </>
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
