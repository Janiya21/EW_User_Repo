"use client";
import React, {useEffect, useState} from "react";
import Model from "@/app/model/page"
import DialogComponent from "@/app/userDetail/page";
import {Button,Code,User} from "@nextui-org/react";

interface UserDetail{
    "id": any;
    "division": any;
    "address": any;
    "mobile": any;
    "experience": any;
}

interface User{
    id:any;
    name:any;
    email:any;
    userDetail: UserDetail;
}

export default function App() {

    const [openDialogs, setOpenDialogs] = useState([]);
    const [data, setData] = useState<User[]>([]);
    const [username, setUsername] = useState('');

    const apiUrl = 'http://localhost:8082/getAllUsers';

    useEffect(() => {
        let authToken = String(localStorage.getItem('authToken'));
        let username = String(localStorage.getItem('user'));
        setUsername(username);
        const fetchData = async () => {
            console.log(authToken);
            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });
            const result = await response.json();
            setData(result);
        };

        fetchData().then(r => {
            console.log(data);
        });
    }, []);

    const handleButtonClick = (rowIndex:number) => {

        const newOpenDialogs = [...openDialogs];

        // @ts-ignore
        newOpenDialogs[rowIndex] = !newOpenDialogs[rowIndex];

        setOpenDialogs(newOpenDialogs);
    };
    // https://nextui.org/gradients/docs-right.png
    // @ts-ignore
    return (
        <div className="relative overflow-x-auto px-28 py-20 shadow-md sm:rounded-lg bg-[url('https://nextui.org/gradients/docs-right.png')]" style={{height:'100vh'}}>
            <div className="flex justify-end">
                <div className="flex mt-2">
                    {/*<Chip color="warning" className={'border-0 pt-3'} variant="dot"><h1 className={'px-2'}>{username}</h1></Chip>
                    <Avatar className={'float-end'} isBordered radius="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />*/}
                    <User
                        name={username}
                        description="Adminastration"
                        avatarProps={{
                            src: "https://i.pravatar.cc/150?u=a04258a2462d826712d"
                        }}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4 my-6">
                <Code className={'flex'} size="md">
                    <h1 className={'px-10 py-4 text-xl order-first'}>User Details</h1>
                    <div className="flex-grow"></div>
                    <Model />
                </Code>
            </div>
            <table className="w-full text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr className="odd:bg-white odd:dark:bg-black even:bg-gray-100 even:dark:bg-gray-800 border-b dark:border-gray-700"
                        key={item.id}>
                        <td className="px-6 py-4">{item.id}</td>
                        <td className="px-6 py-4">{item.name}</td>
                        <td className="px-6 py-4">{item.email}</td>
                        <td className="px-6 py-4">
                            <div>
                                <button className={'text-blue-700'} onClick={() => handleButtonClick(index)}>View User</button>
                                {openDialogs[index] && <DialogComponent onClose={() => handleButtonClick(index)} data={item} row={undefined}/>}
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>

    );
}
