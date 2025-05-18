import React from 'react'

import googleLogo from "../assets/logo/google.gif"
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>
            <div className='bg-gray-100'>
                <div className="flex h-fit items-center justify-center  py-8 md:py-20 lg:py-32">

                    <div className='flex flex-col items-center md:flex-row justify-around p-12 bg-white shadow-xl rounded-xl w-full max-w-2xl'>


                        <div className='flex flex-col items-center'>
                            <div>
                                <h1 className="text-xl font-semibold mb-4">Sign in</h1>
                            </div>

                            <div className='flex flex-col gap-3 w-64'>
                                <input className="p-2 border rounded" type="email" placeholder='Email' required />
                                <input className="p-2 border rounded" type="password" placeholder='Password' required />
                                <button className='bg-slate-800 text-white py-2 rounded'>Sign In</button>


                                <button className='flex items-center justify-center gap-2 border py-2 rounded hover:bg-gray-100'>
                                    <img
                                        src={googleLogo}
                                        alt="Google logo"
                                        className="h-6 w-6"
                                    />
                                    <span className="text-sm text-gray-700">Continue with Google</span>
                                </button>

                                <p className="text-sm text-center text-gray-600 mt-4">
                                    Don't have an account?{" "}
                                    <Link to="/signup" className="text-blue-500 hover:underline">
                                        Register
                                    </Link>
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Login
