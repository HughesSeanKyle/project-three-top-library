import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import signUpImage from '../assets/images/signup-image.jpg';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Validation Schema
const validationSchema = yup.object().shape({
	username: yup.string().required('Username is required'),
	password: yup.string().required('Password is required'),
});

const SignIn = () => {
	// Import RHF useForm
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(validationSchema),
	});

	console.log('errors', errors);

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
							className="rounded-lg bg-custom-white mt-2 p-2 focus:border-blue-900 focus:outline-none focus:ring focus:ring-custom-gray text-custom-black"
							type="text"
							name="username"
							placeholder="Your username"
							{...register('username')}
						/>
						<p>{errors?.username?.message}</p>
					</div>
					<div className="flex flex-col text-custom-white py-2">
						<label>Password</label>
						<input
							className="p-2 rounded-lg bg-custom-white mt-2 focus:border-blue-900 focus:outline-none focus:ring focus:ring-custom-gray text-custom-black"
							type="password"
							name="password"
							placeholder="Your passowrd"
							{...register('password')}
						/>
					</div>
					<div className="flex justify-between text-custom-white py-2">
						<p className="flex items-center">
							<input className="mr-2" type="checkbox" /> Remember Me
						</p>
					</div>
					<button className="w-full my-5 py-2 bg-custom-green shadow-md shadow-custom-gray text-white font-light rounded-lg hover:shadow-md hover:shadow-custom-white hover:bg-custom-green-500">
						SIGN IN
					</button>
				</form>
				<div className="max-w-[333px] flex flex-wrap mt-3 relative w-2/3 mobile-width-reset text-custom-white font-semibold">
					<div className="w-1/2">
						<Link to="/auth/forgot-password">
							<small>Forgot password?</small>
						</Link>
					</div>
					<div className="w-1/2 text-right">
						<Link to="/auth/signup">
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
