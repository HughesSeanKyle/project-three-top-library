import axios from 'axios';

export async function sendVerificationCode(recipient, message) {
	try {
		const response = await axios.post(
			'https://bookworks-email-service.onrender.com/email/send-confirm-code',
			{
				recipient: recipient,
				message: message,
			}
		);

		console.log(response.data);
		if (response.data.error) {
			return {
				data: response.data.error,
				error: null,
			};
		}

		return {
			data: response.data.data,
			error: null,
		};
	} catch (error) {
		console.error(error);
		return {
			data: null,
			error: error,
		};
	}
}

// (async () => {
// 	await sendVerificationCode(
// 		'khughessean@yahoo.com',
// 		'CUSTOM MESSAGE: GET CODE AND VERIFY'
// 	);
// })();

export async function verifyEmailCode(recipient, code) {
	try {
		const response = await axios.post(
			'https://bookworks-email-service.onrender.com/email/verify-action-code',
			{
				recipient: recipient,
				code: code,
			}
		);

		console.log(response.data);

		if (response.data.error) {
			return {
				data: response.data.error,
				error: null,
			};
		}

		return {
			data: response.data.data,
			error: null,
		};
	} catch (error) {
		console.error(error);
		return {
			data: null,
			error: error,
		};
	}
}
