import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const listaDeCartoesSlice = createSlice({
    name: 'listaDeCartoes',
    initialState: {
        listaDeCartoes:[],
    },

    reducers:{
        adicionarCartaoaLista: (state = initialState, action) => {
         
            switch(action.type) {
            
                case 'ADICIONAR_CARTAO':
                    
                    const novoCartao = action.payload.novoCartao

                    return {
                        ...state,
                        listaDeCartoes: [...state.listaDeCartoes, novoCartao]
                    };

                    default: return state;
                
          }
        }
    }
})

export const {adicionarCartaoaLista} = listaDeCartoesSlice.actions
export default listaDeCartoesSlice.reducer