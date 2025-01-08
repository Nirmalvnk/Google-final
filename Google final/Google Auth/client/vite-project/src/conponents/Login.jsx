// import React, { useEffect, useState } from 'react';
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();

//   // Function to handle Google login
//   const handleGoogleLogin = () => {
//     window.location.href = 'http://localhost:3000/auth/google/callback'; 
//   };

//   // Function to handle Google logout
//   const handleGoogleLogout = () => {
//     window.location.href = 'http://localhost:3000/logout'; // Adjust as necessary
//   };

//   return (
//     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//           Sign in to your account
//         </h2>
//       </div>

//       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//         <form className="space-y-6">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//               Email address
//             </label>
//             <div className="mt-2">
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 autoComplete="email"
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div>
//             <div className="flex items-center justify-between">
//               <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                 Password
//               </label>
//               <div className="text-sm">
//                 <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                   Forgot password?
//                 </a>
//               </div>
//             </div>
//             <div className="mt-2">
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 autoComplete="current-password"
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>

//         <div className="space-y-4">
//           <button
//             onClick={handleGoogleLogin}
//             className="mt-2 flex items-center justify-center w-full rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-black shadow-sm border border-gray-300 hover:bg-gray-100"
//           >
//             <FcGoogle className="mr-2 text-xl" />
//             Login with Google
//           </button>

//           <button
//             className="flex items-center justify-center w-full rounded-md bg-black px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
//           >
//             <FaGithub className="mr-2 text-xl" />
//             Sign in with GitHub
//           </button>

//           <button
//             className="flex items-center justify-center w-full rounded-md bg-[#0077B5] px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#005983]"
//           >
//             <FaLinkedin className="mr-2 text-xl" />
//             Login with LinkedIn
//           </button>
//         </div>

//         <p className="mt-10 text-center text-sm text-gray-500">
//           <Link to='/register'>
//             <span className='bg-blue-600 text-white px-4 py-2 rounded-md text-base font-semibold shadow-md hover:bg-blue-700'>
//               Register Now
//             </span>
//           </Link>
//         </p>

//         {/* <button
//           onClick={handleGoogleLogout}
//           className="flex items-center justify-center w-full rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
//         >
//           Logout
//         </button> */}
//       </div>
//     </div>
//   );
// };

// export default Login;




// ================================================================









import React, { useEffect, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  // Function to handle Google login
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google/callback'; 
  };

  // Function to handle GitHub login
  const handleGithubLogin = () => {
    window.location.href = 'http://localhost:3000/auth/github';  // Trigger GitHub OAuth
  };

  // Function to handle Google logout
  const handleGoogleLogout = () => {
    window.location.href = 'http://localhost:3000/logout'; // Adjust as necessary
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="space-y-4">
          <button
            onClick={handleGoogleLogin}
            className="mt-2 flex items-center justify-center w-full rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-black shadow-sm border border-gray-300 hover:bg-gray-100"
          >
            <FcGoogle className="mr-2 text-xl" />
            Login with Google
          </button>

          {/* GitHub login */}
          <button
            onClick={handleGithubLogin}  // Trigger GitHub OAuth
            className="flex items-center justify-center w-full rounded-md bg-black px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
          >
            <FaGithub className="mr-2 text-xl" />
            Sign in with GitHub
          </button>

          <button
            className="flex items-center justify-center w-full rounded-md bg-[#0077B5] px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#005983]"
          >
            <FaLinkedin className="mr-2 text-xl" />
            Login with LinkedIn
          </button>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          <Link to='/register'>
            <span className='bg-blue-600 text-white px-4 py-2 rounded-md text-base font-semibold shadow-md hover:bg-blue-700'>
              Register Now
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;




