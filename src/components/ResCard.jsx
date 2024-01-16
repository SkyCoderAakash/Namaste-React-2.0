import React from 'react';
import {Link} from 'react-router-dom';

const ResCard = (props)=>{
    const {name,areaName,avgRating,cuisines,cloudinaryImageId,id} = props?.data?.info;
    return (
        <div className='w-72  border-2 rounded-lg border-sky-500 overflow-hidden p-3 my-3 bg-opacity-90 bg-rose-100'>
            <Link to={`/restaurent/${id}`}>
            <div>
                <img className='rounded-lg w-full h-40 object-cover' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId} alt='card image'/>
            </div>
            <div className=''>
                <h3 className='text-center text-2xl font-semibold truncate my-3'>{name}</h3>
                <h3 className='text-center text-lg font-medium'>id : {id}</h3>
                <h4 className='text-center text-lg font-medium'>Location : {areaName}</h4>
                <h4 className='text-center text-lg font-medium'>Rating : {avgRating}</h4>
                <h5 className='text-center text-lg font-medium truncate'>{cuisines.join(", ")}</h5>
            </div>
            </Link>
        </div>
    );
};
export default ResCard;