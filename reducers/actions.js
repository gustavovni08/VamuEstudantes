import { createAction } from '@reduxjs/toolkit';

export const adcionarNomeCartao = createAction('cartaoSlice/adcionarNomeCartao');
export const adcionarNumeroCartao = createAction('cartaoSlice/adcionarNumeroCartao');

export const adicionarCartaoaLista = (novoCartao) => ({
    
    type: 'listaDeCartoes/adicionarCartaoaLista',
    payload: novoCartao,

})