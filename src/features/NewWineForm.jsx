import React from "react";
import { useDispatch } from 'react-redux';
import { addWineItem } from "./wineSlice";



const NewWineForm = (props)  => {

    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();
        const payload = {
            winery: e.target.winery.value,
            vintage: e.target.vintage.value,
            grape: e.target.grape.value,
            region: e.target.region.value,
            rating: e.target.rating.value
        }
        e.target.reset();

        dispatch(addWineItem(payload));
    }

    return(
        <>      
            <div id='fullWineForm'>
                <h2>Wine Form</h2>
                <form id="wineForm" onSubmit={submitForm}>
                    <label>Winery:</label>
                    <input type="text" id="name" name="winery"></input>
                    <label>Vintage:</label>
                    <input type="text" id="vintage" name="vintage"></input>
                    <label>Grape:</label>
                    <input type="text" id="grape" name="grape"></input>
                    <label>Region:</label>
                    <input type="text" id="region" name="region"></input>
                    {/* <label for="price">Price:</label>
                    <input type="text" id="price" name="price"></input> */}
                    <label>Rating:</label>
                    <input type="text" id="rating" name="rating"></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
            
        </>
    )
}

export default NewWineForm