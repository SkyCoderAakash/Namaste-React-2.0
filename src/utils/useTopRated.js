import { useState,useEffect } from "react";
import apiData from "./useApiData";

const topRatedRestaurants = ()=>{
    const data = apiData();
    const topRated = data.filter((res)=>{
        return res.info.avgRating >= 4.3
    });
    console.log(topRated);
};

export default topRatedRestaurants;