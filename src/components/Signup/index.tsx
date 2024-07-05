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
        countryCode: "",
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
                            <div className="p-4">
                                <h5 className="text-lg font-medium">First Name</h5>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    value={user.firstName}
                                    onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                                {userErrorState?.firstName && <h6 className="text-red-500 text-sm mt-1">{userErrorState?.firstName}</h6>}

                                <h5 className="text-lg font-medium mt-4">Last Name</h5>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={user.lastName}
                                    onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                                {userErrorState?.lastName && <h6 className="text-red-500 text-sm mt-1">{userErrorState?.lastName}</h6>}

                                <h5 className="text-lg font-medium mt-4">Email</h5>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                                {userErrorState?.email && <h6 className="text-red-500 text-sm mt-1">{userErrorState?.email}</h6>}

                                <div className="mt-4">
                                    <h5 className="text-lg font-medium">Phone Number</h5>
                                    <div className="flex items-center">
                                        <select
                                            value={user.countryCode}
                                            onChange={(e) => setUser({ ...user, countryCode: e.target.value })}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        >
                                            <option value="+1">+1</option>
                                            <option value="+44">+44</option>
                                            <option value="+91">+91</option>
                                        </select>
                                        <input
                                            type="number"
                                            placeholder="Phone Number"
                                            value={user.phoneNumber}
                                            onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                                            className="w-full p-2 border border-gray-300 rounded-r-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    {userErrorState?.phoneNumber && <h6 className="text-red-500 text-sm mt-1">{userErrorState?.phoneNumber}</h6>}
                                </div>


                                <h5 className="text-lg font-medium mt-4">Password</h5>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                                {userErrorState?.password && <h6 className="text-red-500 text-sm mt-1">{userErrorState?.password}</h6>}

                                <h5 className="text-lg font-medium mt-4">Confirm Password</h5>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={user.confirmPassword}
                                    onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                                {userErrorState?.confirmPassword && <h6 className="text-red-500 text-sm mt-1">{userErrorState?.confirmPassword}</h6>}
                            </div>
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