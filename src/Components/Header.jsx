import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { user, signOutUser } = useContext(AuthContext);
    // console.log(signOutUser);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("Sign Out successful");
            }).catch(error => console.log(error.message))
    }

    return (
        <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
            <div class="relative flex items-center justify-between">
                <a
                    to="/"
                    aria-label="Company"
                    title="Company"
                    class="inline-flex items-center"
                >
                    <svg
                        class="w-8 text-purple-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                    >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                    </svg>
                    <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Company
                    </span>
                </a>

                <ul class="flex items-center space-x-8 lg:flex">

                    <li>
                        <NavLink
                            to="/"
                            aria-label="Home"
                            title="Home"
                            class=" font-bold text-gray-700 transition-colors duration-200 hover:text-purple-400"
                        >
                            Home
                        </NavLink>
                    </li>
                    {
                        user && <>
                            <li>
                                <NavLink
                                    to="/orders"
                                    aria-label="Orders"
                                    title="Orders"
                                    class=" font-bold text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                >
                                    Orders
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard"
                                    aria-label="dashboard"
                                    title="Dashboard"
                                    class=" font-bold text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/profile"
                                    aria-label="profile"
                                    title="Profile"
                                    class=" font-bold text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                >
                                    Profile
                                </NavLink>
                            </li>
                        </>
                    }
                    <li>
                        <NavLink
                            to="/login"
                            aria-label="Login"
                            title="Login"
                            class=" font-bold text-gray-700 transition-colors duration-200 hover:text-purple-400"
                        >
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/register"
                            class="inline-flex items-center justify-center h-12 px-6  font-bold text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                        >
                            Sign up
                        </NavLink>
                    </li>
                </ul>

                <div className="flex gap-4 items-center">
                    {
                        user ? <>
                            <span>{user.email}</span>
                            <a onClick={() => handleSignOut()} className="btn btn-success text-white font-bold">Sign Out</a>
                        </>
                            : <Link to="/login"> <button className="btn btn-accent text-white font-bold">Login</button></Link>

                    }

                </div>
                <div class="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-purple-50 focus:bg-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div class="absolute top-0 left-0 w-full">
                            <div class="p-5 bg-white border rounded shadow-sm">
                                <div class="flex items-center justify-between mb-4">
                                    <div>
                                        <a
                                            to="/"
                                            aria-label="Company"
                                            title="Company"
                                            class="inline-flex items-center"
                                        >
                                            <svg
                                                class="w-8 text-purple-400"
                                                viewBox="0 0 24 24"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeMiterlimit="10"
                                                stroke="currentColor"
                                                fill="none"
                                            >
                                                <rect x="3" y="1" width="7" height="12" />
                                                <rect x="3" y="17" width="7" height="6" />
                                                <rect x="14" y="1" width="7" height="6" />
                                                <rect x="14" y="11" width="7" height="12" />
                                            </svg>
                                            <span class="ml-2 text-x font-bold text-gray-800 uppercase">
                                                Company
                                            </span>
                                        </a>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul class="space-y-4">
                                        <li>
                                            <NavLink
                                                to="/"
                                                aria-label="Home"
                                                title="Home"
                                                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                            >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/login"
                                                aria-label="Login"
                                                title="Login"
                                                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                            >
                                                Login
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/register"
                                                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                                aria-label="Sign up"
                                                title="Sign up"
                                            >
                                                Sign up
                                            </NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header