import React, { useState } from 'react';
import './login.css';

const Profile = () => {
    const [backgroundImage, setBackgroundImage] = useState(
        'https://images.unsplash.com/photo-1503264116251-35a2694481d2'
    );

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login form submitted');
    };

    return (
        <div
            className="login-container"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="login-form">
                <h1 className="login-title">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control" required />
                    </div>
                    <button type="submit" className="login-btn">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Profile;

