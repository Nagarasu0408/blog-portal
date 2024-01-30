import React, { useState } from 'react';
import { UserData } from './UserData';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registrationStatus, setRegistrationStatus] = useState('');


    const handleRegister = () => {
        if (username && password) {
            // Check if the username is already taken
            const usernameExists = UserData.some(user => user.UserName === username);

            if (!usernameExists) {
                // If the username is not taken, save the new user data
                UserData.push({
                    UserName: username,
                    Password: password,
                    Status: "Active", // You can set default status or customize as needed
                    Image: "https://example.com/default-avatar.png" // You can set a default image URL or customize as needed
                });

                setRegistrationStatus('Registration successful');
                // Additional logic for successful registration
            } else {
                setRegistrationStatus('Username is already taken');
                // Additional logic for failed registration (username already exists)
            }
        } else {
            setRegistrationStatus('Please enter both username and password');
            // Additional logic for failed registration (missing username or password)
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button onClick={handleRegister}>Register</button>
            <p>{registrationStatus}</p>
        </div>
    );
};

export default Register;
