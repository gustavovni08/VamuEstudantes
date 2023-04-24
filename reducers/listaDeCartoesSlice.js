import { createSlice } from "@reduxjs/toolkit";

const listaDeCartoesSlice = createSlice({
    name: 'listaDeCartoes',
    initialState: {
        listaDeCartoes:[],
    },

    reducers:{
        adicionarCartaoaLista: (state, action) => {
         
            switch(action.type) {
            
                case 'listaDeCartoes/adicionarCartaoaLista':
                    
                    const novoCartao = action.payload

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