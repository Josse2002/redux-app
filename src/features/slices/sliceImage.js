import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "",
}
export const imageSlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        AddImage: (state, action) => {
            state.value = action.payload
        },
        
        
    },
})
export const { AddImage } = imageSlice.actions
export default imageSlice.reducer