import { createSlice } from "@reduxjs/toolkit";

export const wineSlice = createSlice({
    name: 'wine',
    initialState: {
        wineList: [],
        nextID: 10001,
        totalWines: 0,

    },
    reducers:{
        addWineItem: (state, action)=>{

            const newWineItem = {
                winery: action.payload.winery,
                grape: action.payload.grape,
                region: action.payload.region,
                vintage: action.payload.vintage,
                rating: action.payload.rating,
                wineItemId: state.nextID,
            }

            state.wineList.push(newWineItem);
            state.nextID++;
            state.totalWines++;

        },


    }
})

export const { addWineItem } = wineSlice.actions;

export default wineSlice.reducer;