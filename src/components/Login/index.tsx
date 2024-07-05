import React, { useState } from 'react';
import axios from 'axios';
import style from './style.module.css';

export const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const isEmailValid = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };

    const onLogin = async () => {
        if (!isEmailValid(user.email)) {
            return;
        }
        try {
            const response = await axios.post('/api/login', user);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    React.useEffect(() => {
        setButtonDisabled(!(user.email.length > 0 && user.password.length > 0));
    }, [user]);
    return (
        <div className={style.wholeSignupScreen}>
            <div className={style['signup-Card']}>
                <div className={style['left-Part']}>
                    <div className={style.logoContainer}>
                        <img className={style.brandIcon} src="/assets/img/brandicon.png" alt="Brand Logo" width={200} height={200} />
                    </div>
                </div>
                <div className={style['right-Part']}>
                    <div className={style.cardHeader}>
                        <h1>Login</h1>
                    </div>
                    <div className={style.cardContents}>
                        <div className={style.mainPart}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    id="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <br />
                            <div className="flex items-center space-x-2 pb-2">
                                    <input
                                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        type="checkbox"
                                        id="rem"
                                        name="rem"
                                        value="remember"
                                    />
                                    <label htmlFor="rem" className="text-sm text-gray-900 dark:text-white">Remember me</label>
                            </div>
                        </div>
                        <div className={style.signupButton}>
                            <button onClick={onLogin} disabled={buttonDisabled} className={style['login-btn']}>
                                {buttonDisabled ? "No login" : "Login"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
