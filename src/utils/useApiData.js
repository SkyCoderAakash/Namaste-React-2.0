import {useEffect,useState} from 'react';
import { restaurantApi } from './const';

const apiData = ()=>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async ()=>{
        const data = await fetch(restaurantApi);
        const json = await data.json();
        const finalData = json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
        setData(finalData);
    };
    return data;
};

export default apiData;