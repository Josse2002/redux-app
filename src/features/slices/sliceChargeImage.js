import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}
export const image = createSlice({
    name: 'city',
    initialState,
    reducers: {
        imageCharge: (state, action) => {
            state.value = action.payload
        },
        
        
    },
})
export const { imageCharge } = image.actions
export default image.reducer