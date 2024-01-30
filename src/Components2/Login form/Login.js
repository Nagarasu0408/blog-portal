//Login page
import DataChecker from "./DataChecker";

function Login() {
    return (<>
        <DataChecker />
    </>)
}

export default Login;


// import React, { useState } from 'react';
// import Home from '../home';

// export const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [loginStatus, setLoginStatus] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const UserData = [
//         {
//             UserName: "Nagarasu0408",
//             Password: '1234',
//             Status: "Active",
//             Image: "https://avatars.githubusercontent.com/u/88180695?v=4"
//         }
//         // Add more user data as needed
//     ];

//     const handleLogin = () => {
//         const user = UserData.find(user => user.UserName === username && user.Password === password);

//         if (user) {
//             setLoginStatus('Login successful');
//             setIsLoggedIn(true)
//             // Additional logic for successful login
//         } else {
//             setLoginStatus('Invalid username or password');
//             // Additional logic for failed login
//         }
//     };

//     const handleLogout = () => {
//         setIsLoggedIn(false);
//         // Additional logic for logout if needed
//     };

//     return (
//         <div>
//             {/* {isLoggedIn ? (
//                 <div>
//                     <h2>Welcome, {username}!</h2>
//                     <button onClick={handleLogout}>Logout</button>
//                 </div>
//             ) : ( */}
//             <div className='Login_Container'>
//                 {/* <div className='LeftSide'>
//                 </div>
//                 <div className='RightSide'>
//                 </div> */}
//                 <div>
//                     <p>
//                         <h2>Login</h2>
//                     </p>
//                     <p>
//                         <input type="text" id='input_box' value={username} onChange={(e) => setUsername(e.target.value)} />
//                     </p>
//                     <p>
//                         <input type="password" id='password_box' value={password} onChange={(e) => setPassword(e.target.value)} />
//                     </p>
//                     <p>
//                         <button id='btn' onClick={handleLogin}>Login</button>
//                     </p>
//                     <p>{loginStatus}</p>
//                 </div>
//             </div>
//             {/* )} */}
//         </div >
//     );
// };

// export default Login;