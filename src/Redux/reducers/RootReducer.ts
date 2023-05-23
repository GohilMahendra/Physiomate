import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";

const rootReducer  = combineReducers({
    Auth:AuthReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
