# Design Inspiration

App inspiration drawn from [`this design`](https://dribbble.com/shots/7234710-Book-Reviews-Website#).
More information on the web designer [`here`](https://dribbble.com/Tubik).

Authentication form UI [`inspiration`](https://dribbble.com/shots/19338138-Log-in-page-Untitled-UI) 

## Features 

The goal of this web application is to build a web application where a user can SignUp, SignIn and signOut. This will be achieved using Firebase for authentication, local storage as a persistence mechanism (Later iterations will make use of either MongoDB or PostGreSQL). React and Bootstrap 5 will be used to build the UI. 

### Feature 1 - Build authentication components (&& Federated Signup (Later))
1. SignUp form (Page) Completed 01/02
2. Confirm Signup form (Page) Completed 01/02
3. SignIn Form (Page) Completed 01/02
4. Forgot Password (Page) Completed 01/02
5. Forgot Password Confirm (page) Completed 09/02

### Feature 2 - Form validation (Continue here 02/02)
1. Validation sign up Completed 02/02
2. Validation confirm sign up Completed 02/02
3. Validation sign in Completed 02/02
4. Validation forgot password Completed 02/02
5. Validation Forgot Password Confirm (page) Completed 09/02

### Feature 3 - Implement Firebase Authentication logic (&& Federated Signin)
0. IMPORTANT - Would be best to set firebase auth methods up on the server side to offer an additional layer of security. When setting auth methods directly on the client side the web app is exposed to security vulnerabilties such as man-in-the-middle attacks. This ensures that sensitive information such as passwords and tokens are not transmitted directly from the client to the authentication service.
Additionaly, when all needed methods are implemented convert service to a cloud function. Enhanced security features: Cloud functions provided by platforms such as Firebase come with built-in security features, such as encryption and firewalls, to help secure sensitive data and prevent unauthorized access.
- Circle back to auth service later (dmarc issue with sendGrid - See service notes). For now Signup on client side. Complete 07/02
- New solution for custom email. Try Nodemailer. See [`bookworks-authentication-service`](https://github.com/HughesSeanKyle/bookworks-authentication-service) for more info. 
- Use the current Firebase auth logic setup on the client side and setup nodemailer in the auth service as a cloud function. 1. Use this service to implement custom forgot password logic. 2. To build custom signup logic. More info in [`bookworks-authentication-service`](https://github.com/HughesSeanKyle/bookworks-authentication-service)



1. Logic for sign up
1.0 NEW => Service for action verification has been built and deployed. Service does two things: 
- 1.0.1. Sends the user an action code (This function can be used for Signup => Confirm Signup, Forgot Password => Forgot Password Confirm or Code confirm to delete sensitive content)
- 1.0.2. Verifies the action code

1.1 Implement email service logic into signup 
- When user signs up send code 
- If code validated and returns true then set email to verified in DB

1.2 When adding firebase auth logic implement isSubmitting from RHF. If isSubmitting true then loader in btn else none. Same goes for other forms 

1.3 Consider what user attributes will be useful right from the start 
- Build alert component 
- Use onAuthStateChanged to check emailVerified prop. If false, show alert and ask to resend email? Block certain features of app if not verified. e.g no uploads... 
- Implement resend verification email functionality. 

2. Logic for confirm sign up
This route can only be accessed via Signup as step 1 of the flow
- Return to this logic later when sendGrid or mailing service set up.

3. Logic for signin 
4. Logic for signout
5. Logic Forgot Password 
This section should have a two part flow. 1. The email is added to the input, 2. The confirm code ui form (Comp can only be accessed by initiating step 1). Make use of useNavigate

5.0 => Implement email service here
- 5.0.1. User initiaites forgot password 
- 5.0.2. Email with custom message and code sent to user 
- 5.0.3. User will input code, new pw and confirm new pw on forgot password confirm page 

6. Logic Forgot Password Confirm 
- See 5 above. 


### Feature 4 - User authentication alerts 
0. NOTE: When implementing alerts here, try to incorporate the useTrasition hook to animate the mounting and unmounting of the alert. See if a lib like animate.js can be used. 
1. Alerts sign up
2. Alerts confirm sign up
3. Alerts sign in
4. Alerts sign out
5. Alerts forgot password
5. Alerts forgot password confirm
6. Keep track if route is admin or auth

### Feature 5 - Book application 
1. Protect route if no JWT
2. When clicking a Book from the grid a sidebar open from the right to left showing all book information. (See Design) 
3. Further features to be defined later
4. Incorporate with firebase storage mechanisms => (CRUD)
For this make use of the cloud functions and follow micro services architecture pattern 
5. Use project 2 (Niftyswap) dashboard as inspiration for this dash. 

## Email service features 

### Features - Setup cloud function for node mailer with custom email
Spark plan (Firebase) no longer offers cloud functions as a service. However, stick to microservice architecture, create this service and deploy with render. Only issue os that you will not have auto scalling and all the great features that come with serverless functions.

Update: 10/02 - Vercel offers FaaS (Functions as a Service) - Use
NOTE: 12/02 - Opted to use regular express server and deploy to Vercel. Better debugging options and can test locally with more ease. Downside - Server will always be running even if no acitvity. 

- Setting up Nodemailer for with secure password - More info available [`here`](https://stackoverflow.com/questions/72470777/nodemailer-response-535-5-7-8-username-and-password-not-accepted)

1. Setup Nodemailer for custom signup email with auth code to email (DONE 12/02)
- Error handling 'error-back' pattern - Done 10/02
- Use this function in SignUp flow. When user inputs code and verifyActionCode returns data=true then set user emailVerified attribute to true in Firebase

2. Setup Nodemailer for custom forgot password with authcode to verify email reset (Update this feature progress in client side .md as well) (DONE 12/02)
- Error handling 'error-back' pattern - Done 10/02
- Use this function in SignUp flow. When user inputs code and verifyActionCode returns data=true then redirect user to Forgot Password Confirm => Enter code and use Firebase's reset password API to update the password => Make sure this password is encrypted. 

3. Test functions locally before deploy (DONE 12/02)
- Note "https://bookworks-4fa23.firebaseapp.com" has not been deployed on Firebase just yet. Must still be done when testing functions on client side

4. Ensure that this function can only be called from whitelisted domains (DONE 12/02)
- The Bookworks client side domain 
- Local 

5. May need to set CORS (DONE 13/02)
- More info [`here`](https://vercel.com/knowledge/how-to-enable-cors?query=cors#understanding-cors)

6. NOTE: Express API deployed to Render instead. 

