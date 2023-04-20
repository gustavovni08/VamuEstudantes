import { combineReducers } from "redux";
import cartaoSlice from "./cartaoSlice";


const rootReducer = combineReducers({
    cartao: cartaoSlice
})

export default rootReducer