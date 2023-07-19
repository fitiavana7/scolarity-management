import { createSlice } from "@reduxjs/toolkit";


export const ConnexionSlice = createSlice({
    name : 'connexion' ,
    initialState : {
        connexionStatus : {
            status : false
        }
    } ,
    reducers : {
        setConnexion : (state, action)=>{
            state.connexionStatus = action.payload 
        },
    },
});

export const { setConnexion } = ConnexionSlice.actions ;
export default ConnexionSlice.reducer; 