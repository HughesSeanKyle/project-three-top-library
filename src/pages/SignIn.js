import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import signUpImage from '../assets/images/signup-image.jpg';
import bookTransparent from '../assets/images/book-no-bg-trimmy.jpg';

const SignIn = () => {
	return (
		<div className="bg-custom-green grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 h-screen w-full">
			<div className="flex flex-col justify-center content-center items-center form-padding image-bg-mobile-only dark-layer">
				<h2 className="text-4xl text-custom-white font-bold text-center mb-5 mobile-z-index">
					BookWorks.io
				</h2>
				<form className="max-w-[400px] w-full mx-auto rounded-lg shadow-lg shadow-custom-black bg-gray-900 p-8 px-8 mobile-z-index">
					<h2 className="text-4xl text-custom-white font-bold text-center">
						SIGN IN
					</h2>
					<div className="flex flex-col text-custom-white py-2">
						<label>Username</label>
						<input
							className="rounded-lg bg-custom-white mt-2 p-2 focus:border-blue-900 focus:outline-none focus:ring focus:ring-custom-gray"
							type="text"
						/>
					</div>
					<div className="flex flex-col text-custom-white py-2">
						<label>Password</label>
						<input
							className="p-2 rounded-lg bg-custom-white mt-2 focus:border-blue-900 focus:outline-none focus:ring focus:ring-custom-gray"
							type="password"
						/>
					</div>
					<div className="flex justify-between text-custom-white py-2">
						<p className="flex items-center">
							<input className="mr-2" type="checkbox" /> Remember Me
						</p>
					</div>
					<button className="w-full my-5 py-2 bg-custom-green shadow-md shadow-custom-gray text-white font-semibold rounded-lg hover:shadow-md hover:shadow-custom-white hover:bg-custom-green-500">
						SIGNIN
					</button>
				</form>
				<div className="flex flex-wrap mt-6 relative w-2/3 mobile-width-reset text-custom-white font-semibold">
					<div className="w-1/2">
						<a
							href="#pablo"
							onClick={(e) => e.preventDefault()}
							className="text-blueGray-200"
						>
							<small>Forgot password?</small>
						</a>
					</div>
					<div className="w-1/2 text-right">
						<Link to="/auth/register" className="text-blueGray-200">
							<small>Create new account</small>
						</Link>
					</div>
				</div>
			</div>
			<div className="hidden lg:block shadow-lg inset-0 rounded-l-lg shadow-lg shadow-custom-gray">
				<img
					className="rounded-l-sm w-full h-screen object-cover"
					src={signUpImage}
					alt=""
				/>
			</div>
		</div>
	);
};

export default SignIn;
