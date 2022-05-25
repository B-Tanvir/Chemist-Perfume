import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import {toast} from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);
    if (user || userG) {
        navigate(from, {replace: true})
    }

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

    const handleLogin = e => {
        console.log(password )
        signInWithEmailAndPassword(email, password)
    }

    const loginWithGoogle = () =>  {
        signInWithGoogle(email, password)
    }
    return (
        <div className="hero h-screen min-h-screen bg-base-100 hover:bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Explore all the all perfume brands in all place and buy with best prices.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={(event) => setEmail(event.target.value)} type="text" name={'email'} placeholder="email" className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onBlur={(e) => setPassword(e.target.value)} type="password" name={'password'} placeholder="password" className="input input-bordered"/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className={'flex'}>
                                <label className="label">
                                    <a href="#" className="label-text-alt text-success-content link link-hover">Don't have an account?</a>
                                </label>
                                <Link to={'/register'} className={'link text-primary link-hover mt-1 ml-2'}>Register now!</Link>
                            </div>
                        </div>
                        <div onClick={handleLogin} className="form-control mt-6">
                            <button className="btn btn-primary" type={'submit'}>Login</button>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                            <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or
                                login with Google</a>

                            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                        </div>

                        <div className="flex items-center mt-2 -mx-2">
                            <button type="button"
                                    onClick={loginWithGoogle}
                                    className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                                <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                                    </path>
                                </svg>

                                <span className="hidden mx-2 sm:inline">Log In With Google</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;