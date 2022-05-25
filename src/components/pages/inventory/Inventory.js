import React from 'react';
import {useParams} from "react-router-dom";

const Inventory = () => {
    const {id} = useParams()
    return (
        <div>
            inventory: {id}
        </div>
    );
};

export default Inventory;