import React from 'react';
import Image from "next/image";

const Page = () => {
    return (
        <main className={"w-full bg-black"} style={{height:'100vh', overflow:'hidden'}}>
            <div className="px-12 grid grid-cols-2">
                <div className="col-span-1">
                    <div className="box">
                        <div className="inner-box flex max-w-sm mx-auto my-5">
                            <img className="w-56" src="https://ceylonpages.lk/wp-content/uploads/2022/05/E.W.-Balasuriya-Co.-PVT-LTD-Logo.png" alt="image description"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-white justify-center items-center mx-36 py-16" style={{border:'1px solid gray'}}>
                <div className="px-12 grid grid-cols-2">
                    <div className="col-span-1">
                        <div className="box">
                            <div className="inner-box max-w-sm mx-auto">
                                <h3 className={"mt-5 mx-3"}>Hello<text className={"text-red-400 ms-3"}>janithsandaru999@gmail.com</text></h3>
                            </div>
                            <form className="max-w-sm mx-auto mt-10">
                                <div className="mb-5">
                                    <input type="number" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mobile number" required></input>
                                </div>
                                <div className="mb-5">
                                    <input type="password" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required></input>
                                </div>
                                <div className="mb-5">
                                    <input type="password" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="confirm password" required></input>
                                </div>
                            </form>
                            <div className="inner-box max-w-sm mx-auto">
                                <button className="relative w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-300 to-yellow-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                        <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Log In
                                        </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <Image className="w-full h-auto max-w-xxs max-h-xxs sm:max-w-xs sm:max-h-xs md:max-w-sm md:max-h-sm lg:max-w-md lg:max-h-md xl:max-w-lg xl:max-h-lg max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter"
                               src="/ew.jpg" width={500} height={300} alt="image description"></Image>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;