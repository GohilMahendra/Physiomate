import { fork } from "redux-saga/effects";
import AuthSaga from "./AuthSaga";

function* rootSaga()
{
    yield fork(AuthSaga)
}
export default rootSaga