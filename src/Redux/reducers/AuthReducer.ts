import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { LoginSuccessPayload,SignUpFailedPayload,SignUpSuccessPayload,loginFailedPayload } from "../Types/AuthTypes";

type user = {
    userName: string,
    email: string,
    error: null | string,
    loginLoader: boolean,
    SignUpLoader: boolean,
    SignUpError: null | string

}
const initialState:user={
    userName:"",
    email:"",
    error:null,
    loginLoader:false,
    SignUpError: null,
    SignUpLoader: false
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
            state.loginLoader = false
        },
        loginFailed:(state:user,action:PayloadAction<loginFailedPayload>)=>{
            state.error = action.payload.error,
            state.loginLoader = false
        },
        SignUpRequest:(state:user)=>
        {
            state.SignUpLoader = true
        },
        SignUpSuccess:(state:user, action: PayloadAction<SignUpSuccessPayload>)=>
        {
            state.SignUpLoader = false,
            state.userName = action.payload.userName
            state.email = action.payload.email
        },
        SignUpError:(state:user,action:PayloadAction<SignUpFailedPayload>)=>
        {
            state.SignUpLoader = false
        }
    }

}
)

export const {loginFailed,loginRequest,loginSuccess,SignUpError,SignUpRequest,SignUpSuccess} = AuthReducer.actions
export default AuthReducer.reducer