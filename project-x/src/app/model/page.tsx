"use client";
import React, {useEffect, useState} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

interface FormData {
    username: string;
    email: string;
    divisionAddress: string;
    address:string,
    telephone: string;
    experience: string;
}

// @ts-ignore
const PopOver = ({ shouldRender }) => {
    return (
        <div className={'absolute bottom-10 right-10 z-50'}>
            {shouldRender &&
                <div id="toast-default" className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"/>
                        </svg>
                        <span className="sr-only">Fire icon</span>
                    </div>
                    <div className="ms-3 text-sm px-4 font-normal">Successfull</div>
                </div>
            }
        </div>
    );
};

export default function Model() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [dialogCon, setDialogCon] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        divisionAddress: '',
        address:'',
        telephone: '',
        experience: '',
    });
    const { username, email, divisionAddress, address, telephone, experience } = formData;
    let refactoredData = null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username || !email || !divisionAddress || !telephone || !experience) {
            alert('Please fill in all required fields.');
            return;
        }

        refactoredData = {
            "name":formData.username,
            "email":formData.email,
            "userDetail": {
                "division": formData.divisionAddress,
                "address": formData.address,
                "mobile": parseInt(formData.telephone,10),
                "experience": parseInt(formData.experience,10)
            }
        }

        try {
            let authToken = String(localStorage.getItem('authToken'));
            const response = await fetch('http://localhost:8082/addUser', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(refactoredData),
            });
            setDialogCon(true);
            const data = await response.json();
            console.log(data);
            setTimeout(() => {
                setDialogCon(false);
                window.location.reload();
            }, 2500);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Button onPress={onOpen} color="warning" className={'mt-3'} variant="flat">
                + Add User
            </Button>
            <PopOver shouldRender={dialogCon}/>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add User</ModalHeader>
                            <ModalBody>
                                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input value={username}
                                               onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                               type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input value={email}
                                               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                               type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input value={divisionAddress}
                                               onChange={(e) => setFormData({ ...formData, divisionAddress: e.target.value })}
                                               type="text" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Division</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input value={address}
                                               onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                               type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mb-5 group">
                                            <input value={telephone}
                                                   onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                                                   type="tel" pattern="^0\d{9}$" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tel (123-456-7890)</label>
                                        </div>
                                        <div className="relative z-0 w-full mb-5 group">
                                            <input value={experience}
                                                   onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                                   type="number" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Experience(years)</label>
                                        </div>
                                        <ModalFooter>
                                            <Button color="danger" variant="light" onPress={onClose}>
                                                Close
                                            </Button>
                                            <Button color="primary" type="submit">
                                                Submit
                                            </Button>
                                        </ModalFooter>
                                    </div>
                                </form>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
