import { combineReducers } from "redux";
import cartaoSlice from "./cartaoSlice";
import listaDeCartoesSlice from "./listaDeCartoesSlice";


const rootReducer = combineReducers({
    cartao: cartaoSlice,
    listaDeCartoes: listaDeCartoesSlice
})

export default rootReducer