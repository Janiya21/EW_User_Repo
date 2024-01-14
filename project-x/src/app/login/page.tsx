"use client";
import React, {useState} from "react";
import {Button, Chip, Input} from "@nextui-org/react";
import Image from 'next/image';
import TokenService from "@/app/token/TokenService";
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    // @ts-ignore
    const handleLogin = async ({ username, password }) => {
        // Call your Spring Boot backend to authenticate the user and retrieve the token
        try {
            const response = await fetch('http://localhost:8082/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            console.log(response);
            const data = await response.json();
            console.log(data.token);

            setToken(data.token);

            TokenService.setToken(data.token);
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('user', data.username);

            await new Promise(resolve => setTimeout(resolve, 1000));
            router.push('/userList');

        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        // Call a function to handle login (passed from parent component)
        await handleLogin({username, password});
    };

    return (
        <main className={"w-full bg-black bg-[url('https://files.123freevectors.com/wp-content/original/110419-black-blurred-background-vector.jpg')]"} style={{height:'100vh', overflow:'hidden'}}>
            {/*<div className="px-10 grid grid-cols-2">
                <div className="col-span-1">
                    <div className="box">
                        <div className="inner-box flex max-w-sm mx-auto my-5">
                            <img className="w-56" src="https://ceylonpages.lk/wp-content/uploads/2022/05/E.W.-Balasuriya-Co.-PVT-LTD-Logo.png" alt="image description"></img>
                            <h3 className={'mt-12'}>EW Balasuriya PVT LTD</h3>
                        </div>
                    </div>
                </div>
            </div>*/}
            <div className="border-white justify-center bg-black items-center mx-48 mt-36 pt-12 pb-12" style={{border:'1px solid #866D06'}}>
                <div className="px-12 py-12 grid grid-cols-2">
                    <div className="col-span-1">
                        <section className="bg-center h-full bg-no-repeat bg-[url('https://img.freepik.com/premium-photo/luxury-gold-necklace-displayed-jewelry-stand_846334-1657.jpg')] bg-gray-700 bg-blend-multiply">
                            <div className="mx-auto max-w-screen-xl text-center">
                                <img className="w-56" src="https://ceylonpages.lk/wp-content/uploads/2022/05/E.W.-Balasuriya-Co.-PVT-LTD-Logo.png" alt="image description"></img>
                            </div>
                        </section>
                    </div>
                    <div className="col-span-1">
                        <div className="box h-72">
                            <div className="inner-box max-w-sm mx-auto mt-2">
                                <h3 className={"mb-10"}>Don't have an Account ?<Chip color="warning" className={'ms-4 cursor-pointer'} variant="faded">Create</Chip></h3>
                            </div>
                            <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-2">
                                <div className="mb-5">
                                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-900" placeholder="username" required></input>
                                </div>
                                <div className="mb-5">
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-950" placeholder="password" required></input>
                                </div>
                                <div className="flex items-start mt-12">
                                    <label htmlFor="remember" className="ms-2 mx-8 text-sm font-medium text-gray-900 dark:text-gray-300">Forgot Password ?</label>
                                    <div className="flex items-center h-5">
                                        <button type="submit" className="relative w-52 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hiddentext-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-sm px-5 py-2.5 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                            Log In
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
