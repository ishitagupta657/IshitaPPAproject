"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import style from './style.module.css';
import Image from 'next/image';

export default function Signup() {
    const [user, setUser] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const onSignup = async () => {
        try {
            const response = await axios.post('/api/signup', user);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        setButtonDisabled(!(user.email.length > 0 && user.password.length > 0));
    }, [user]);
    const formCheck = () => {
        const [imput1, setInput1] = useState('')
        const [input2, setInput2] = useState('')
        const [inputError1, setInputerror1] = useState('')
        const [inputError2, setInputerror2] = useState('')
    }

    return (
        <div className={style.wholeSignupScreen}>
            <div className={style['signup-Card']}>
                <div className={style['left-Part']}>
                    <div className={style.logoContainer}>
                        <img className={style.brandIcon} src="/assets/img/brandicon.png" alt="Brand Logo" />
                    </div>
                </div>
                <div className={style['right-Part']}>
                    <div className={style.cardHeader}>
                        <h1>Sign Up</h1>
                    </div>
                    <div className={style.cardContents}>
                        <div className={style.mainPart}>
                            <h5>First Name</h5>
                            <input
                                type='text'
                                placeholder='First Name'
                                value={user.firstName}
                                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                            />
                            <h5>Last Name</h5>
                            <input
                                type='text'
                                placeholder='Last Name'
                                value={user.lastName}
                                onChange={(e) => setUser({ ...user, lastName: e.target.value })
                                }
                            />
                            <h5>Email</h5>
                            <input
                                type='text'
                                placeholder='Email'
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                            />
                            <h5>Phone Number</h5>
                            <input
                                type='text'
                                placeholder='Phone Number'
                                value={user.phoneNumber}
                                onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                            />
                            <h5>Password</h5>
                            <input
                                type='password'
                                placeholder='Password'
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />
                            <h5>Confirm Password</h5>
                            <input
                                type='password'
                                placeholder='Confirm Password'
                                value={user.confirmPassword}
                                onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                            />
                        </div>
                        <div className={style.bottomConfirmationPart}>
                            <div className={style['member-Check']}>
                                <p>Already a member? <b>Log In</b></p>
                            </div>
                            <div className={style.signupButton}>
                                <button onClick={onSignup} disabled={buttonDisabled}>{buttonDisabled ? "No signup" : "Signup"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
