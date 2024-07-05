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
    const [showSpinner, SetshowSpinner] = useState<any>(false);
    const onSignup = async () => {
        try {
            if (!isFormValid()) {
                return
            }
            SetshowSpinner(true)
            const response = await axios.post('/api/signup', user);
            SetshowSpinner(false)
            console.log(response.data);
        } catch (error) {
            SetshowSpinner(false)
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
                                <button disabled={showSpinner} onClick={onSignup}>
                                    {
                                        showSpinner ? <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                        </svg> : <></>
                                    }
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}