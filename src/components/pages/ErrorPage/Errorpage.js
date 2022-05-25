import React from 'react';
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <section className="bg-base-100 hover:bg-base-200 py-[120px]">
            <div className="container mx-auto">
                <div className="flex -mx-4">
                    <div className="w-full px-4">
                        <div className="mx-auto max-w-[400px] text-center">
                            <h2
                                className="
                  font-bold
                  text-blue-500
                  mb-2
                  text-[50px]
                  sm:text-[80px]
                  md:text-[100px]
                  leading-none
                  "
                            >
                                404
                            </h2>
                            <h4
                                className="text-red-600 font-semibold text-[22px] leading-tight mb-3"
                            >
                                Oops! That page can’t be found
                            </h4>
                            <p className="text-lg text-gray-900 mb-8">
                                The page you are looking for it maybe deleted
                            </p>
                            <Link
                                to="/"
                                className="
                  text-base
                  font-semibold
                  btn btn-accent
                  inline-block
                  text-center
                  border border-white
                  rounded-lg
                  px-8
                  py-3
                  transition
                  "
                            >
                                Go To Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="
      absolute
      -z-10
      w-full
      h-full
      top-0
      left-0
      flex
      justify-between
      items-center
      space-x-5
      md:space-x-8
      lg:space-x-14
      "
            >
                <div
                    className="w-1/3 h-full bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"
                ></div>
                <div className="w-1/3 h-full flex">
                    <div
                        className="
            w-1/2
            h-full
            bg-gradient-to-b
            from-[#FFFFFF14]
            to-[#C4C4C400]
            "
                    ></div>
                    <div
                        className="
            w-1/2
            h-full
            bg-gradient-to-t
            from-[#FFFFFF14]
            to-[#C4C4C400]
            "
                    ></div>
                </div>
                <div
                    className="w-1/3 h-full bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"
                ></div>
            </div>
        </section>
    );
};

export default ErrorPage;