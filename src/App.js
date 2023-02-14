import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import { useEffect } from 'react';

import SignIn from './pages/SignIn.js';
import SignUp from './pages/SignUp.js';
import ForgotPassword from './pages/ForgotPassword.js';
import ForgotPasswordConfirm from './pages/ForgotPasswordConfirm.js';
import ConfirmSignUp from './pages/ConfirmSignUp.js';

// api
import { sendVerificationCode, verifyEmailCode } from './api/emailService.js';

function App() {
	// useEffect(() => {
	// }, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/auth/signin'} element={<SignIn />} />
				<Route path={'/auth/signup'} element={<SignUp />} />
				<Route path={'/auth/confirm-signup'} element={<ConfirmSignUp />} />
				<Route path={'/auth/forgot-password'} element={<ForgotPassword />} />
				<Route
					path={'/auth/forgot-password-confirm'}
					element={<ForgotPasswordConfirm />}
				/>

				<Route path={'/'} element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
