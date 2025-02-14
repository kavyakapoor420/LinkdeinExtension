import React from "react";

const Register = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      {/* Image Section */}
      {/* <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-1/3 h-screen"> */}
        {/* <img
          src="https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="Goa Beach"
          className="w-full h-full object-cover" */}
        {/* /> */}
        <div className="relative h-[600px] lg:h-screen mr-10">
              <spline-viewer url="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"></spline-viewer>
        </div>
      {/* </div> */}

      {/* Registration Form Section */}
      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-2/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full">
          <h1 className="text-xl font-bold">
            Register On <span className="text-violet-400">SAFETIPIN</span>
          </h1>
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Create Free Account to Get Started{" "}
            <span className="text-violet-400">SAFETIPIN</span>
          </h1>

          {/* Registration Form */}
          <form className="mt-6" action="/user/register" method="POST">
            <div>
              <label htmlFor="username" className="block text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Username"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoFocus
                autoComplete="off"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="email" className="block text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoComplete="off"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                minLength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              Register
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          {/* Google Registration Button */}
          <button
            type="button"
            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FBBC05"
                d="M0 37V11l17 13z"
              />
              <path
                fill="#EA4335"
                d="M0 11l17 13 7-6.1L48 14V0H0z"
              />
              <path
                fill="#34A853"
                d="M0 37l30-23 7.9 1L48 0v48H0z"
              />
              <path
                fill="#4285F4"
                d="M48 48L17 24l-4-3 35-10z"
              />
            </svg>
            <span className="ml-4">Register with Google</span>
          </button>

          <p className="text-sm text-gray-500 mt-12">
            &copy; 2025 Kavya Kapoor - All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
