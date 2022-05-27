import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const InventoryDetails = () => {
    const {id} = useParams()
    const [inventory, setInventory] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setInventory(data))
    },  [inventory])
    return (
        <div className="hero min-h-screen bg-base-100 hover:bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={inventory.img} className="max-w-sm rounded-lg shadow-2xl"/>
                <div>
                    <h1 className="text-5xl font-bold">{inventory.name}</h1>
                    <p className={'py-3 text-secondary-focus'}>Product Id : <span className={'text-secondary-content'}>{inventory._id}</span></p>
                    <p className="pb-6">{inventory.description}</p>

                    <div className={'flex flex-col justify-center'}>
                        <div className="stats shadow">
                            <div className="stat place-items-center">
                                <div className="stat-title">Price</div>
                                <div className="stat-value">{inventory.price}</div>
                            </div>

                            <div className="stat place-items-center">
                                <div className="stat-title">Brand</div>
                                <div className="stat-value text-secondary">{inventory.supplier}</div>
                            </div>

                            <div className="stat place-items-center">
                                <div className="stat-title">Quantity</div>
                                <div className="stat-value">{inventory.quantity}</div>
                            </div>
                        </div>

                        <div className={'flex justify-center items-center mt-3'}>
                            <button className="btn btn-primary">Delivered</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetails;