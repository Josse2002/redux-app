import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value:
    { }
        ,
}

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        AddWheather: (state, action) => {
            state.value = action.payload
        },
        AddName: (state, action) => {
            state.value = Object.assign({}, state.value, action.payload);
        },
        
    },
})
export const { AddWheather, AddName } = citySlice.actions
export default citySlice.reducer