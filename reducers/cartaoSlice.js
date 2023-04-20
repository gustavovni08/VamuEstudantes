import { createSlice, createAction } from "@reduxjs/toolkit";

const cartaoSlice = createSlice({
    name:'cartao',
    initialState: { nome: "", numero:""},

    reducers: {
        adcionarNomeCartao: (state, cartao) => state.nome = cartao.nome, 
        adcionarNumeroCartao: (state, cartao) => state.nome = cartao.nome,
    }
})



export const { adcionarNomeCartao, adcionarNumeroCartao} = cartaoSlice.actions
export default cartaoSlice.reducer