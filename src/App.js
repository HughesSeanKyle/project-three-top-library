import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import { useEffect } from 'react';

import SignIn from './pages/SignIn.js';
import SignUp from './pages/SignUp.js';
import ForgotPassword from './pages/ForgotPassword.js';
import ForgotPasswordConfirm from './pages/ForgotPasswordConfirm.js';
import ConfirmSignUp from './pages/ConfirmSignUp.js';

function App() {
	useEffect(() => {
		// TEST SEND CONFIRM CODE
		// var myHeaders = new Headers();
		// myHeaders.append('Content-Type', 'application/json');

		// var raw = JSON.stringify({
		// 	recipient: 'khughessean@yahoo.com',
		// 	message: 'Test message',
		// });

		// var requestOptions = {
		// 	method: 'POST',
		// 	headers: myHeaders,
		// 	body: raw,
		// 	redirect: 'follow',
		// };

		// fetch(
		// 	'https://bookworks-email-service.onrender.com/email/send-confirm-code',
		// 	requestOptions
		// )
		// 	.then((response) => response.json())
		// 	.then((result) => console.log(result))
		// 	.catch((error) => console.log('error', error));

		// TEST VERIFY CODE
		var myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		var raw = JSON.stringify({
			recipient: 'khughessean@yahoo.com',
			code: '201605',
		});

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow',
		};

		fetch(
			'https://bookworks-email-service.onrender.com/email/verify-action-code',
			requestOptions
		)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log('error', error));
	}, []);

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
