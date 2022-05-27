import React from 'react';

const Blogs = () => {
    return (
        <div>

            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-12 mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-800 lg:text-4xl dark:text-white">Asked
                        questions.</h1>

                    <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 sm:grid-cols-1">
                        <div>
                            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 dark:text-white"> Difference between javascript and nodejs?</h1>

                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                                    Javascript is a programming language for website script and it runs on browser that supports javascript engine. Node.js in javascript run time environment. For executing javascript on server Node.js is a bridge.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">When should you use nodejs and when should you use mongodb?</h1>

                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">Node.js is used for server side development.NodeJS used to connect our client site with database. MongoDB is a NoSQL database where we store data.</p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 dark:text-white"> Differences between sql and nosql databases?</h1>

                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                                    SQL is the programming language used to interface with relational database whereas NoSQL is non-tabular database.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                                    What is the purpose of jwt and how does it work?
                                </h1>

                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                                    JWT is an open standard for securely transmitting data between server side and client side as a JSON object. JWT
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;