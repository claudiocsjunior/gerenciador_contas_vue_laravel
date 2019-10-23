//Alterar o estado do state que é invocada por uma action
import * as types from './mutation-types';

export default{
    [types.SET_USER] (state, payload){
        state.user = payload;
    },

    [types.SET_TOKEN] (state, payload){
        state.token = payload;
    },

};
