# Design Inspiration

App inspiration drawn from [`this design`](https://dribbble.com/shots/7234710-Book-Reviews-Website#).
More information on the web designer [`here`](https://dribbble.com/Tubik).

Authentication form UI [`inspiration`](https://dribbble.com/shots/19338138-Log-in-page-Untitled-UI) 

## Features 

The goal of this web application is to build a web application where a user can SignUp, SignIn and signOut. This will be achieved using Firebase for authentication, local storage as a persistence mechanism (Later iterations will make use of either MongoDB or PostGreSQL). React and Bootstrap 5 will be used to build the UI. 

### Feature 1 - Build authentication components (&& Federated Signup (Later))
1. SignUp form (Page) Complete 01/02
2. Confirm Signup form (Page) 
3. SignIn Form (Page) Complete 01/02
4. Forgot Password (Page) Complete 01/02

### Feature 2 - Implement Firebase Authentication logic (&& Federated Signin)
1. Logic for sign up
2. Logic for confirm sign up
This route can only be accessed via Signup as step 1 of the flow
3. Logic for signin 
4. Logic for signout
5. Logic Forgot Password 

### Feature 3 - Form validation 
1. Validation sign up
2. Validation confirm sign up
3. Validation sign in
4. Validation forgot password

### Feature 4 - User authentication alerts 
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

