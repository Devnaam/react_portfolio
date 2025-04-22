import { configureStore } from '@reduxjs/toolkit'
import themeChangerReducer from '../features/themeChanger/themeChanger'

export const store = configureStore({
  reducer: {
    themeChanger:themeChangerReducer
  },
})