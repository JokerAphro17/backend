import React from 'react'
import logo from '../../assets/images/logo/logo.png'
const Logo = () => {
    return (
        <div className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-lg dark:bg-gray-800 mt-8 border-2 border-gray-200">
            <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
                <img src={logo} alt="logo" />
            </h1>
        </div>
    )
}

export default Logo;
