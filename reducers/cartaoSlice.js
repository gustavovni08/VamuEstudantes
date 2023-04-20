import { createSlice } from "@reduxjs/toolkit";

const cartaoSlice = createSlice({
    name:'cartao',
    initialState: { nome: "", numero:"", quantidade: 44 },

    reducers: {
        adcionarNomeCartao: (state, action) => {
            return {...state, nome: action.payload}
        }, 
        adcionarNumeroCartao: (state, action) => {
            return {...state, numero: action.payload}
        }
    }
})



export const { adcionarNomeCartao, adcionarNumeroCartao} = cartaoSlice.actions
export default cartaoSlice.reducer