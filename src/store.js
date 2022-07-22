
import { configureStore } from "@reduxjs/toolkit";
import townReducer from './features/slices/formTownSlice';
import wheather from './features/slices/showWeatherSlice'
import  ShowingWeather  from "./features/slices/myWeatherSlice";
import sliceImage from "./features/slices/sliceImage";
import imageState from "./features/slices/sliceChargeImage";

export const store  = configureStore({
    reducer: {
        //ACA IRAN MIS REDUCTORES
        town: townReducer,
        wheather: wheather,
        myplace: ShowingWeather,
        image: sliceImage,
        stateImage: imageState
    }
})