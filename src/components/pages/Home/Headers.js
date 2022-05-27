import React from 'react';

const Headers = () => {
    return (
        <div className={'bg-base-100 hover:bg-base-200'}>
            <div
                className="container flex flex-col py-10 px-auto space-y-6 mx-auto lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div className="w-full lg:w-1/2">
                    <div className="lg:maxWLg">
                        <h1 className="text-2xl font-medium trackingWide text-gray-800 dark:textWhite lg:text-4xl">{/*Find Your*/} Premium Perfumes Warehouse.</h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">We work with the best remunated perfume
                            brands from around the world.</p>
                        <div className="grid gap-6 mt-8 sm:grid-cols-2">
                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>

                                <span className="mx-3">Premium selection</span>
                            </div>

                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>

                                <span className="mx-3">Insurance</span>
                            </div>

                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>

                                <span className="mx-3">All legal documents</span>
                            </div>

                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>

                                <span className="mx-3">From World class Brands</span>
                            </div>

                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>

                                <span className="mx-3">Payment Security</span>
                            </div>

                            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>

                                <span className="mx-3">Fast shipping (+ Express)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img className="object-cover w-full h-full maxW-2xl rounded-md"
                         src="https://images.unsplash.com/photo-1557827983-012eb6ea8dc1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876"
                         alt="glasses photo"/>
                </div>
            </div>
        </div>
    );
};

export default Headers;