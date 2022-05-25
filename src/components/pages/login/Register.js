import React, {useEffect, useState} from 'react';
import {useCreateUserWithEmailAndPassword, useSignInWithGoogle} from "react-firebase-hooks/auth";
import {Link, useNavigate} from 'react-router-dom'
import auth from "../../../firebase.init";
import {toast} from "react-toastify";

const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);

    useEffect(() => {
        if ((!loading && !loadingG) && (error || errorG)) {
            if (error) {
                toast(error.message)
            }
            if (errorG) {
                toast(errorG.message)
            }
        }
    }, [loading, loadingG])

    if (user || userG) {
        navigate('/');
    }

    const handleLoginWithPassword = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)
    };

    const loginWithGoogle = () =>  {
        signInWithGoogle(email, password)
    }

    return (
        <div className="w-full max-w-sm py-6 px-12 m-auto bg-blue-50 hover:bg-base-200 my-6 rounded-md shadow-md dark:bg-gray-800">
            <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Chemist Perfume</h1>

            <form className="mt-6" onSubmit={handleLoginWithPassword}>
                <div>
                    <label htmlFor="email"
                           className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                    <input onBlur={(e) => setEmail(e.target.value)} type="email" name={'email'} required={true}
                           className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password"
                               className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                        <button className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget
                            Password?</button>
                    </div>

                    <input onBlur={e => setPassword(e.target.value)} type="password" name={'password'} required={true}
                           className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                </div>

                <div className="mt-6">
                    <button
                        type={"submit"}
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Register
                    </button>
                </div>
            </form>

            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or
                    Continue with Social Media</a>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
            </div>

            <div className="flex items-center mt-6 -mx-2">
                <button type="button"
                        onClick={loginWithGoogle}
                        className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                    <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                        <path
                            d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                        </path>
                    </svg>

                    <span className="hidden mx-2 sm:inline">Continue With Google</span>
                </button>

            </div>

            <p className="mt-8 text-xs font-light text-center text-gray-400"> Already registered? <Link to="/login"
                                                                                                        className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Sign
                In</Link></p>
        </div>
    );
};

export default Register;