import {call,put, takeLatest } from "redux-saga/effects";
import Auth,{FirebaseAuthTypes} from "@react-native-firebase/auth";
import { loginSuccess,loginRequest,loginFailed } from "../reducers/AuthReducer"
import { PayloadAction, createAction } from "@reduxjs/toolkit";
import { useNavigation } from "@react-navigation/native";

export const login = createAction<{ email: string; password: string }>('loginSaga');

function* loginSaga(action: PayloadAction<{ email: string; password: string }>):any {
    try {
     yield put(loginRequest());
      const authStatus = yield call(Auth().signInWithEmailAndPassword, action.payload.email, action.payload.password);
      console.log(authStatus,"Auth statys")
      yield put(loginSuccess(authStatus));
    } catch (error:any) {
        console.log("errr",error)
      yield put(loginFailed(error));
    }
  }

  function* AuthSaga() {
    yield takeLatest(login.type, loginSaga);
 
  }

  export default AuthSaga