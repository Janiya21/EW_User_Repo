"use client";
import React, {useEffect, useState} from "react";
import Model from "@/app/model/page"
import DialogComponent from "@/app/userDetail/page";
import {Button, Code, Image, User} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { useRouter } from 'next/navigation';

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
    const router = useRouter();
    const [openDialogs, setOpenDialogs] = useState([]);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
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

    const logOut = () => {
        router.push('/');
    }

    // @ts-ignore
    return (
        <div className="relative overflow-x-auto px-28 py-20 shadow-md sm:rounded-lg bg-[url('https://nextui.org/gradients/docs-right.png')]" style={{height:'100vh'}}>
            <div className="flex justify-end">
                <div className="flex mt-2">
                    <User
                        name={username}
                        description="Adminastration"
                        avatarProps={{
                            src: "https://i.pravatar.cc/150?u=a04258a2462d826712d"
                        }}
                    />
                    <button onClick={onOpen} type="button" className="text-white focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center me-2 ">
                        <Image
                            alt="Card background"
                            className="object-cover ms-3 rounded-xl"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6QBT0bL5KyxZowZJiNzRTgg27h3o1JDi7HA&usqp=CAU"
                            width={50}
                        />
                        <span className="sr-only">Icon description</span>
                    </button>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">Log Out</ModalHeader>
                                    <ModalBody>
                                        <p>
                                            Are you sure want to log-out ?
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            No
                                        </Button>
                                        <Button color="primary" onPress={logOut}>
                                            Yes
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
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
