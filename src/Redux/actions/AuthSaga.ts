import {call,put, takeLatest } from "redux-saga/effects";
import Auth,{FirebaseAuthTypes} from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore'
import { loginSuccess,loginRequest,loginFailed, SignUpRequest, SignUpSuccess, SignUpError } from "../reducers/AuthReducer"
import { PayloadAction, createAction } from "@reduxjs/toolkit";

export const login = createAction<{ email: string; password: string }>('loginSaga');
export const signUp = createAction<{email: string, password: string, userName: string}>('registerSaga');
function* loginSaga(action: PayloadAction<{ email: string; password: string }>):any {
    try {
     yield put(loginRequest());
      const authStatus:FirebaseAuthTypes.UserCredential = yield call(  [Auth(), 'signInWithEmailAndPassword'],
      action.payload.email,
      action.payload.password);
      const email = authStatus.user?.email || ""
      yield put(loginSuccess({email:email}));
    } catch (error:any) {
      yield put(loginFailed(error));
    }
}

function* registerSaga(action:PayloadAction<{email: string, password: string, userName: string}>){
  try
  {
    yield put(SignUpRequest())
    const { email, password , userName} = action.payload
    const authStatus:FirebaseAuthTypes.UserCredential = yield call([Auth(), "createUserWithEmailAndPassword"],
      email,
      password
    )
    const doctorsCollectionRef = firestore().collection("doctors");
    const doctorData = {
      email: email,
      userName: userName
    }
    yield call([doctorsCollectionRef,"add"],doctorData)
    yield put(SignUpSuccess({email,userName}))

  }
  catch(error:any)
  {
    yield put(SignUpError(error))

  }
}
  function* AuthSaga() {
    yield takeLatest(login.type, loginSaga);
    yield takeLatest(signUp.type, registerSaga)
 
  }

  export default AuthSaga