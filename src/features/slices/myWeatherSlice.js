import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value:
    {},
}

export const mySliceWeather = createSlice({
    name: 'names',
    initialState,
    reducers: {
        myWheather: (state, action) => {
            state.value = action.payload
        },
        addDesc: (state, action) => {
            state.value = Object.assign({}, state.value, action.payload);
        },
        name: (state, action) => {
            state.value = Object.assign({}, state.value, action.payload);
        }
    },
})
export const { myWheather, addDesc, name } = mySliceWeather.actions
export default mySliceWeather.reducer