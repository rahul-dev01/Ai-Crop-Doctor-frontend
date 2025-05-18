import React from 'react'
import { Link } from 'react-router-dom'
import googleLogo from "../assets/logo/google.gif"

const SignUp = () => {
    return (
        <>
            <div className='bg-gray-100 flex items-center justify-center py-8 md:py-20 lg:py-32'>
                <div className='flex flex-col items-center bg-white shadow-xl rounded-xl w-full max-w-2xl p-12'>
                    <h1 className="text-xl font-semibold mb-6">Create your account</h1>

                    <div className='flex flex-col gap-4 w-64'>
                        <input className="p-2 border rounded" type="text" placeholder='First Name' required />
                        <input className="p-2 border rounded" type="text" placeholder='Last Name' required />
                        <input className="p-2 border rounded" type="email" placeholder='Email' required />
                        <input className="p-2 border rounded" type="password" placeholder='Password' required />
                        <button className='bg-slate-800 text-white py-2 rounded'>Create account</button>

                        <button className='flex items-center justify-center gap-2 border py-2 rounded hover:bg-gray-100'>
                            <img src={googleLogo} alt="Google logo" className="h-6 w-6" />
                            <span className="text-sm text-gray-700">SignUp with Google</span>
                        </button>

                        <p className="text-sm text-center text-gray-600 mt-6">
                            Already have an account?{" "}
                            <Link to="/login" className="text-blue-500 hover:underline">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
