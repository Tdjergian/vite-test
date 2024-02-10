import React from "react";
import { useSelector } from "react-redux";
import WineItem from "./WineItem";


const WineList = ()  => {
    const wineList = useSelector(state => state.wine.wineList);

    const wines = [];

    wineList.map((wine)=>{
        wines.push(<WineItem winery={wine.winery} grape={wine.grape}
        region={wine.region} vintage={wine.vintage} rating={wine.rating} wineItemId={wine.ItemId}/>)
    })

    
    return(
        <div id='wineList'>
            <h2>Wine List</h2>
            {wines}
        </div>
    )
}

export default WineList