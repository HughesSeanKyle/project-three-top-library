import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import signUpImage from '../assets/images/signup-image.jpg';

const SignUp = () => {
	return (
		<div className="bg-custom-green grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 h-screen w-full">
			<div className="bg-custom-green overflow-y-auto flex flex-col justify-center content-center items-center form-padding image-bg-mobile-only dark-layer">
				<h2 className="xl:mt-5 xl:mb-5 sm:mt-0 sm:mb-0 text-4xl text-custom-white font-bold text-center mobile-z-index signup-heading">
					BookWorks.io
				</h2>
				<form className="max-w-[400px] w-full mx-auto rounded-lg shadow-lg shadow-custom-black bg-gray-900 p-8 px-8 mobile-z-index signup-form">
					<h2 className="text-4xl text-custom-white font-bold text-center">
						SIGN UP
					</h2>
					<div className="flex flex-col text-custom-white py-2">
						<label>Username</label>
						<input
							className="rounded-lg bg-custom-white mt-2 p-2 focus:border-blue-900 focus:outline-none focus:ring focus:ring-custom-gray"
							type="text"
						/>
					</div>
					<div className="flex flex-col text-custom-white py-2">
						<label>Email</label>
						<input
							className="rounded-lg bg-custom-white mt-2 p-2 focus:border-blue-900 focus:outline-none focus:ring focus:ring-custom-gray"
							type="email"
						/>
					</div>
					<div className="flex flex-col text-custom-white py-2">
						<label>Password</label>
						<input
							className="p-2 rounded-lg bg-custom-white mt-2 focus:border-blue-900 focus:outline-none focus:ring focus:ring-custom-gray"
							type="password"
						/>
					</div>
					<div className="flex flex-col text-custom-white py-2">
						<label>Confirm Password</label>
						<input
							className="p-2 rounded-lg bg-custom-white mt-2 focus:border-blue-900 focus:outline-none focus:ring focus:ring-custom-gray"
							type="password"
						/>
					</div>
					<button className="w-full my-5 py-2 bg-custom-green shadow-md shadow-custom-gray text-white font-light rounded-lg hover:shadow-md hover:shadow-custom-white hover:bg-custom-green-500">
						SIGN UP
					</button>
				</form>
				<div className="max-w-[360px] flex flex-wrap mt-1 mb-3 relative w-2/3 mobile-width-reset text-custom-white font-semibold">
					<div className="w-1/2">
						<Link to="/auth/signin">
							<small>Already have an account?</small>
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

export default SignUp;
