import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const townSlice = createSlice({
  name: 'town',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.value = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setCity } = townSlice.actions
export default townSlice.reducer