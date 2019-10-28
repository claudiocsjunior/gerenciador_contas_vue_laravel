//Responsáveis por chamar as mutations e chamar as requisições
import services from '@/http';
import * as types from './mutation-types';


export const ActionSetWatchList = ({commit}) => {
    services.watchlist.findWatchlist().then( res => {
        commit(types.SET_WATCHLIST, res.data.data);
    })

}

