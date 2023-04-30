import React, { useState } from 'react';
import Navbar from './navbar';
import './login.css';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(
        JSON.parse(localStorage.getItem('isLogin')) === true
    );

    console.log(localStorage.getItem('isLogin'));

    const handleSubmit = () => {
        if (name !== '' && password !== '') {
            const user = { name: name, password: password };
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('isLogin', true);
            setIsLogin(true);
        } else {
            alert('Invalid Information');
        }
    };
    return (
        <>
            {isLogin === false ? (
                <div id="container">
                    <div className="login_content">
                        <div className="login__heading">Sign In</div>
                        <div className="form__input">
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                            />
                        </div>
                        <div className="form__input">
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </div>
                        <div className="form__button">
                            <button
                                variant="primary"
                                onClick={() => handleSubmit()}>
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <Navbar name={name} password={password} />
            )}
        </>
    );
};

export default Login;
