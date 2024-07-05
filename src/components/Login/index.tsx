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
                                <h5>Email Address</h5>
                                <input
                                    type='text'
                                    placeholder='Email Address'
                                    value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                />
                            </div>
                            <br />
                            <div className="checkbox-container" style={{ display: 'flex', justifyContent: 'flex-start', gap: '4px' }}>
                                <div>
                                    <input className="box" type="checkbox" id="rem" name="rem" value="remember" />
                                </div>
                                <div>
                                    <label htmlFor="rem">Remember me</label>
                                </div>
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
