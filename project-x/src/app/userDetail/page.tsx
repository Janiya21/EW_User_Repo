"use client"
import React, {useEffect} from 'react';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

// @ts-ignore
const DialogComponent = ({row, onClose, data }) => {
    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <div className="dialog-overlay absolute">
            <div className="dialog-content">
                <Card className="py-4">
                    <button className={'ms-64'} onClick={onClose}>x</button>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <h4 className="font-bold text-large mb-2">{data.name}</h4>
                        <p className="text-tiny uppercase font-bold">{data.userDetail.division}</p>
                        <small className="text-default-500">{data.userDetail.address}</small>
                        <small className="text-default-500">{data.userDetail.mobile}</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src="https://nextui.org/images/hero-card-complete.jpeg"
                            width={270}
                        />
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default DialogComponent;