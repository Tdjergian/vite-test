import React from "react";

export default function WineItem({ winery, vintage, grape, region, rating, wineItemId }) {
    return(
        <div key={toString(wineItemId)} className="wineItem">
            <h3>{winery}</h3>
            <p>Year: {vintage}</p>
            <p>Grape: {grape}</p>
            <p>Region: {region}</p>
            <p>Rating: {rating}</p>
        </div>
    )
}