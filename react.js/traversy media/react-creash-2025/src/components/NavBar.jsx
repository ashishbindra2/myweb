import { useState } from 'react';
import { FiBell } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import logo from '../assets/images/logo.png';

const NavBar = () => {
    const linkClass = ({ isActive }) => 
        isActive 
        ? 'rounded-md bg-black hover:bg-gray-700 px-3 py-2 text-sm font-medium text-white hover:text-white' 
        : 'rounded-md hover:bg-gray-700 px-3 py-2 text-sm font-medium text-white hover:text-white'
    ;
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img className="h-8 w-auto" src={logo} alt="Your Company" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <NavLink to="/" className={linkClass} aria-current="page">Dashboard</NavLink>
                                <NavLink to="/jobs" className={linkClass}>Jobs</NavLink>
                                <NavLink to="/add-job" className={linkClass}>Add Job</NavLink>
                                <NavLink to="/c" className={linkClass}>Calendar</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <FiBell className="size-6 text-gray-500 dark:text-gray-400" aria-hidden="true" />

                        </button>

                        <div className="relative ml-3">
                            <div>
                                <button
                                    type="button"
                                    className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                                    onClick={() => setUserMenuOpen(prev => !prev)}
                                    aria-expanded={userMenuOpen}
                                    aria-haspopup="true"
                                    id="user-menu-button"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="size-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?...&q=80"
                                        alt=""
                                    />
                                </button>
                            </div>

                            {userMenuOpen && (
                                <div
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu-button"
                                >
                                    <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Your Profile</NavLink>
                                    <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Settings</NavLink>
                                    <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">Sign out</NavLink>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    <NavLink to="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</NavLink>
                    <NavLink to="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</NavLink>
                    <NavLink to="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</NavLink>
                    <NavLink to="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</NavLink>
                </div>
            </div>
        </nav>

    )
}

export default NavBar