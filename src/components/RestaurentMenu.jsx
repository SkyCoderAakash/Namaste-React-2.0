import React from 'react';
import { useParams } from 'react-router-dom';

const RestaurentMenu = ()=>{
    const {resId} = useParams();
    return (
        <div>
            <h1>Hlo i am menu page {resId}</h1>
        </div>
    )
};

export default RestaurentMenu;