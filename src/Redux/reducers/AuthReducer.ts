import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { LoginSuccessPayload,loginFailedPayload } from "../Types/AuthTypes";


type user = {
    userName: string,
    email: string,
    error: null | string,
    loginLoader: boolean
}
const initialState:user={
    userName:"",
    email:"",
    error:null,
    loginLoader:false
}

const AuthReducer = createSlice({
    name:"Auth",
    initialState:initialState,
    reducers:{
        loginRequest:(state:user)=>{
            state.loginLoader=true
        },
        loginSuccess:(state:user,action:PayloadAction<LoginSuccessPayload>)=>{
            state.email = action.payload.email,
            state.userName = action.payload.userName,
            state.loginLoader = false
        },
        loginFailed:(state:user,action:PayloadAction<loginFailedPayload>)=>{
            state.error = action.payload.error,
            state.loginLoader = false
        }
    }

}
)

export const {loginFailed,loginRequest,loginSuccess} = AuthReducer.actions
export default AuthReducer.reducer