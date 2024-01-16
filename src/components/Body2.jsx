import React, { useEffect, useState } from 'react';
import ResCard from './ResCard';
import Simmer from './Simmer';
import axios from 'axios';
import topRatedRestaurants from '../utils/useTopRated';

const Body2 = ()=>{
    const [resData,setResData] = useState([]);
    const [filteredResData,setFilteredResData] = useState([]);
    const [searchText,setSearchText] = useState("");
    useEffect(()=>{
        fetchAPI()
    },[]);
    const fetchAPI = async ()=>{
        axios.get('https://www.swiggy.com/mapi/homepage/getCards?lat=28.5194062&lng=77.2024306')
        .then((res)=>{
            const finalData = res?.data?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
            setResData(finalData);
            setFilteredResData(finalData);
            // console.log("hlo", )
        }).catch((error)=>{
            console.log(error);
        });
    }; 
    const clickHandle = ()=>{
        const topRated = resData.filter((res)=> res.info.avgRating>=4.3);
        setFilteredResData(topRated);
    };
    const seacrchHandel = ()=>{
        const filteredResData = resData.filter((res)=>{
            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
        });
        setFilteredResData(filteredResData);
    };

    return resData.length==0 ? <Simmer/> : (
        <div className='body p-5'>
            <div className='flex my-6'>
                <button className='border-2 mx-4 rounded-md border-solid border-red-700 px-2 py-1 bg-amber-400' onClick={clickHandle}>Top restaurants</button>
                <input className='w-80 border-2 mx-1 rounded-md border-solid border-red-700 px-2 py-1 bg-amber-200' type="text" placeholder='search here......' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
                <button className='border-2 rounded-md border-solid border-red-700 px-2 py-1 bg-amber-400' onClick={seacrchHandel}>search</button>
            </div>
            <div className='flex flex-wrap justify-evenly'>
                {
                    filteredResData.map((res)=>{
                        return (
                            <ResCard key={res.info.id} data={res}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Body2;