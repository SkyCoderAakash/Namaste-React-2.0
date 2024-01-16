import React from 'react';
import {useRouteError} from 'react-router-dom'

const NotFound = ()=>{
    // const err = useRouteError();
    // console.log(err);
    return (
        <div>
            <h1>Opps !! <br /> something went wrong</h1>
        </div>
    );
};

export default NotFound;