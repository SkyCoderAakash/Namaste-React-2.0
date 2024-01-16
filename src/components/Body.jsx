import React, { useEffect, useState } from 'react';
import ResCard from './ResCard';
import { restaurants } from '../utils/const';
import Simmer from './Simmer';


const Body = ()=>{
    const [resData,setResData] = useState(restaurants);
    // const [resData,setResData] = useState([]);
    // useEffect(()=>{
    //     fetchAPI()
    // },[]);
    // const fetchAPI = async ()=>{
    //     const apiData = await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=28.5194062&lng=77.2024306');
    //     const json = await apiData.json();
    //     const finalData = await json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
    //     setResData(finalData);
    // };
    const clickHandle = ()=>{
        const topRated = restaurants.filter((res)=> res.info.avgRating>=4.3);
        setResData(topRated);
    }
    return resData.length==0 ? <Simmer/> : (
        <div className='body'>
            <div className='feature'>
                <button onClick={clickHandle}>Top restaurants</button>
            </div>
            <div className='resContainer'>
                {
                    resData.map((res)=>{
                        return (
                            <ResCard key={res.info.id} data={res}/>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Body;