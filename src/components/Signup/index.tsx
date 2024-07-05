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
    const [userErrorState, setUserErrorState] = useState<any>({});

    const onSignup = async () => {
        try {
            if (!isFormValid()) {
                return
            }
            const response = await axios.post('/api/signup', user);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const isFormValid = () => {
        if (!user.firstName) {
            setUserErrorState({ firstName: "First Name is required field" })
            return false
        }
        if (!user.lastName) {
            setUserErrorState({ lastName: "Last Name is required field" })
            return false
        }
        if (!user.email) {
            setUserErrorState({ email: "Email is required field" })
            return false
        }
        if (!user.phoneNumber) {
            setUserErrorState({ phoneNumber: "Phone Number is required field" })
            return false
        }
        if (user.phoneNumber.length != 10) {
            setUserErrorState({ phoneNumber: "Phone Number should be 10 digits" })
            return false
        }
        if (!user.password) {
            setUserErrorState({ password: "Phone Number is required field" })
            return false
        }
        if (!user.confirmPassword) {
            setUserErrorState({ confirmPassword: "Confirm Password is required field" })
            return false
        }
        if (user.password != user.confirmPassword) {
            setUserErrorState({ confirmPassword: "Confirm Password doesn't match with password field" })
            return false
        }
        setUserErrorState({})
        return true
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
                            {userErrorState?.firstName ? <><h6 className={style.errorMsg}>{userErrorState?.firstName}</h6></> : <></>}

                            <h5>Last Name</h5>
                            <input
                                type='text'
                                placeholder='Last Name'
                                value={user.lastName}
                                onChange={(e) => setUser({ ...user, lastName: e.target.value })
                                }
                            />
                            {userErrorState.lastName ? <><h6 className={style.errorMsg}>{userErrorState.lastName}</h6></> : <></>}

                            <h5>Email</h5>
                            <input
                                type='text'
                                placeholder='Email'
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                            />
                            {userErrorState.email ? <><h6 className={style.errorMsg}>{userErrorState.email}</h6></> : <></>}

                            <h5>Phone Number</h5>
                            <input
                                type='number'
                                placeholder='Phone Number'
                                value={user.phoneNumber}
                                onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                            />
                            {userErrorState.phoneNumber ? <><h6 className={style.errorMsg}>{userErrorState.phoneNumber}</h6></> : <></>}

                            <h5>Password</h5>
                            <input
                                type='password'
                                placeholder='Password'
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />
                            {userErrorState.password ? <><h6 className={style.errorMsg}>{userErrorState.password}</h6></> : <></>}

                            <h5>Confirm Password</h5>
                            <input
                                type='password'
                                placeholder='Confirm Password'
                                value={user.confirmPassword}
                                onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                            />
                            {userErrorState.confirmPassword ? <><h6 className={style.errorMsg}>{userErrorState.confirmPassword}</h6></> : <></>}

                        </div>
                        <div className={style.bottomConfirmationPart}>
                            <div className={style['member-Check']}>
                                <p>Already a member? <b>Log In</b></p>
                            </div>
                            <br />
                            <div className={style.signupButton}>
                                <button onClick={onSignup}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}