import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import SignIn from './pages/SignIn.js';
import SignUp from './pages/SignUp.js';
import ForgotPassword from './pages/ForgotPassword.js';
import ConfirmSignUp from './pages/ConfirmSignUp.js';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/auth/signin'} element={<SignIn />} />
				<Route path={'/auth/signup'} element={<SignUp />} />
				<Route path={'/auth/confirm-signup'} element={<ConfirmSignUp />} />
				<Route path={'/auth/forgot-password'} element={<ForgotPassword />} />

				<Route path={'/'} element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
