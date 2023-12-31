import { Link } from 'gatsby';
import React, { useState } from 'react';
import logo from '../images/logo.svg';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const isBrowser = () => typeof window !== "undefined";

    const pages = [
        {
            label: "Collaborate",
            href: "/collaborate",
            isActive: isBrowser() && window?.location?.pathname === "/collaborate/"
        },
        {
            label: "Privacy Policy",
            href: "/privacy-policy",
            isActive: isBrowser() && window?.location?.pathname === "/privacy-policy/"
        },
    ];
    return (
        <>
            <nav className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link to="/">
                                <span className="sr-only">LIVE</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src={logo}
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button
                                type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open menu</span>
                                {/* Heroicon name: outline/menu */}
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                        <nav className="hidden md:flex space-x-10">
                            {pages.map((page) => (
                                <Link
                                    to={page.href}
                                    className={`text-base capitalize font-medium text-gray-500 hover:text-gray-900 ${page.isActive ? 'text-[#55b64b]' : ''}`}
                                >
                                    {page.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
                {/*
                    Mobile menu, show/hide based on mobile menu state.

                    Entering: "duration-200 ease-out"
                    From: ""
                    To: ""
                    Leaving: "duration-100 ease-in"
                    From: "opacity-100 scale-100"
                    To: "opacity-0 scale-95"
                */}

                <div
                    className={
                        open
                            ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transform origin-top-right md:hidden z-10"
                            : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    }
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src={logo}
                                        alt=""
                                    />
                                </div>
                                <div className="-mr-2">
                                    <button
                                        type="button"
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#55b64b]"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                                {pages.map((page) => (
                                    <Link
                                        to={page.href}
                                        className={`text-base capitalize font-medium text-gray-500 hover:text-gray-900 ${page.isActive ? 'text-[#55b64b]' : ''}`}
                                    >
                                        {page.label}
                                    </Link>
                                ))}

                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#55b64b]"
                                >
                                    Sign up
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-[#55b64b]">
                                    Existing customer?{' '}
                                    <a href="#" className="text-[#55b64b]">
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
// {
//     navLinks.map((link) => <li key={link.databaseId}><a href={link.uri} className="nav-link active" aria-current="page">{link.label}</a></li>)
// }

export default NavBar