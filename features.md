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

### Feature 2 - Form validation (Continue here 02/02)
1. Validation sign up Completed 02/02
2. Validation confirm sign up Completed 02/02
3. Validation sign in Completed 02/02
4. Validation forgot password Completed 02/02

### Feature 3 - Implement Firebase Authentication logic (&& Federated Signin)
0. IMPORTANT - Would be best to set firebase auth methods up on the server side to offer an additional layer of security. When setting auth methods directly on the client side the web app is exposed to security vulnerabilties such as man-in-the-middle attacks. This ensures that sensitive information such as passwords and tokens are not transmitted directly from the client to the authentication service.
Additionaly, when all needed methods are implemented convert service to a cloud function. Enhanced security features: Cloud functions provided by platforms such as Firebase come with built-in security features, such as encryption and firewalls, to help secure sensitive data and prevent unauthorized access.
- Circle back to auth service later (dmarc issue with sendGrid - See service notes). For now Signup on client side. Complete 07/02


1. Logic for sign up
1.1 When adding firebase auth logic implement isSubmitting from RHF. If isSubmitting true then loader in btn else none. Same goes for other forms 
1.2 Consider what user attributes will be useful right from the start 
- Build alert component 
- Use onAuthStateChanged to check emailVerified prop. If false, show alert and ask to resend email? Block certain features of app if not verified. e.g no uploads... 
- Implement resend verification email functionality.  
2. Logic for confirm sign up
This route can only be accessed via Signup as step 1 of the flow
- Return to this logic later when sendGrid or mailing service set up.

3. Logic for signin 
4. Logic for signout
5. Logic Forgot Password 

### Feature 4 - User authentication alerts 
0. NOTE: When implementing alerts here, try to incorporate the useTrasition hook to animate the mounting and unmounting of the alert. See if a lib like animate.js can be used. 
1. Alerts sign up
2. Alerts confirm sign up
3. Alerts sign in
4. Alerts sign out
5. Alerts forgot password

### Feature 5 - Book application 
1. Protect route if no JWT
2. When clicking a Book from the grid a sidebar open from the right to left showing all book information. (See Design) 
3. Further features to be defined later
4. Incorporate with firebase storage mechanisms => (CRUD)
For this make use of the cloud functions and follow micro services architecture pattern 
5. Use project 2 (Niftyswap) dashboard as inspiration for this dash. 

