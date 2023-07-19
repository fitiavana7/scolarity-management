import { configureStore } from "@reduxjs/toolkit";
import ConnexionSliceReducer from "../feature/connexion.slice";

export default configureStore({
    reducer:{
        loginSession : ConnexionSliceReducer,
    }
})