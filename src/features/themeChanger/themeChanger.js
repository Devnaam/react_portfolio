import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const themeChangerSlice = createSlice({
  name: 'themeChanger',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = !state.value; // toggling between true and false
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeChangerSlice.actions

export default themeChangerSlice.reducer