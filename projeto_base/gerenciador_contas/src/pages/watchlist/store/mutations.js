//Alterar o estado do state que é invocada por uma action
import * as types from './mutation-types';

export default{
    [types.SET_WATCHLIST] (state, payload){
        state.watchlist = payload;
    }
};
