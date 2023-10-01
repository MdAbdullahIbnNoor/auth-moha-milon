// import { useState } from "react"
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider'

const Register = () => {
    // const [userRegister, setUserRegister] = useState('')
    // const [registrationError, setRegistrationError] = useState('')
    const {createUser} = useContext(AuthContext)
    // console.log(authInfo);

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);  

        // Create user with UseContext
        createUser(email, password)
        .then(res => {
            console.log(res.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className="p-10">
            <h1 className="mb-8 font-extrabold text-4xl">Register</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <form onSubmit={handleRegister}>
                    <div>
                        <label className="block font-semibold" htmlFor="name">Name</label>
                        <input
                            className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                            id="name"
                            type="text"
                            name="name"
                            required="required"
                            autoFocus="autofocus"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block font-semibold" htmlFor="email">Email</label>
                        <input
                            className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                            id="email"
                            type="email"
                            name="email"
                            required="required"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block font-semibold" htmlFor="password">Password</label>
                        <input
                            className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                            id="password"
                            type="password"
                            name="password"
                            required="required"
                            autoComplete="new-password"
                        />
                    </div>
                    <div className="flex items-center justify-between mt-8">
                        <button
                            type="submit"
                            className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        >
                            Register
                        </button>
                        <Link to="/login" className="font-semibold text-blue-600">
                            Already registered?
                        </Link>
                    </div>
                </form>
                <aside className="">
                    <div className="bg-gray-100 p-8 rounded">
                        <h2 className="font-bold text-2xl">Instructions</h2>
                        <ul className="list-disc mt-4 list-inside">
                            <li>All users must provide a valid email address and password to create an account.</li>
                            <li>Users must not use offensive, vulgar, or otherwise inappropriate language in their username or profile information.</li>
                            <li>Users must not create multiple accounts for the same person.</li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>

    )
}

export default Register