import * as types from './mutation-types';
import * as storage from "../../storage/user/storage";

export const ActionSign = ({commit}, payload) => {
    let formData = new FormData();
    Object.keys(payload).forEach(key => formData.append(key, payload[key]));
    return  axios.post('/register', formData)
    .then(({ data }) => {
        return {verificacao: false, msg: ''};
      })
    .catch(error => {
        return {verificacao: true, msg: error.response != undefined ? error.response.data.error : 'Erro ao realizar cadastro'};
    });
};

export const ActionLogin = ({dispatch}, payload) => {
    let formData = new FormData();
    Object.keys(payload).forEach(key => formData.append(key, payload[key]));
    return axios.post('/login', formData)
    .then(({ data }) => {
        dispatch('ActionSetUser', data.user);
        dispatch('ActionSetToken', data.token);
        dispatch('ActionSetTokenHeaderStorage', data.token);
        return {verificacao: false, msg: ''};
    })
    .catch(error => {
        //.response != undefined ? error.response.data.error : 'Erro ao realizar login'
        return {verificacao: true, msg: error};
    });
};

export const ActionSetUser = ({commit}, payload) => {
    commit(types.SET_USER, payload);
};

export const ActionSetToken = ({commit}, payload) => {
    commit(types.SET_TOKEN, payload);
};

export const ActionSetTokenHeaderStorage = ({commit}, payload) => {
    //axios.default.headers.common['Authorization'] = 'Bearer ' + payload;
    //axios.default.headers.common['Accept'] = 'application/json';
    storage.setLocalToken(payload);
};

export const ActionCheckToken = ({dispatch, state}) => {
    if(state.token){
        return Promise.resolve(state.token);
    }

    const token = storage.getLocalToken();
    if(!token){
        return Promise.reject(new Error('Token Inválido'))
    }
    dispatch('ActionSetToken', token);
    dispatch('ActionSetTokenHeaderStorage', token);
    return dispatch('ActionDetails');
};

export  const ActionDetails = ({dispatch, state}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const headers = {
                "Access-Control-Allow-Origin": "*",
                'Accept': 'application/json',
                'Authorization': 'Bearer' + state.token
            }
            console.log(state.token)
            const { data: { user } } = await axios.post('/details', {}, headers).then(({ data }) => {return data;});
            dispatch('ActionSetUser', user)
            resolve()
        } catch (err) {
            console.log("fiz logout")
            //dispatch('ActionSignOut')
            reject(err)
        }
    })
};

export const ActionSignOut = ({ dispatch }) => {
    dispatch('ActionSetTokenHeaderStorage', '');
    storage.removeLocalToken();
    dispatch('ActionSetUser', {});
    dispatch('ActionSetToken', '');
}
