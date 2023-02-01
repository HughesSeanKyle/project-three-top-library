import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import SignIn from './pages/SignIn';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth/signin" element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
