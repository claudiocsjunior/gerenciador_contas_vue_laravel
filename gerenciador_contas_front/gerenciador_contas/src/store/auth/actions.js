import * as types from './mutation-types';

export const ActionSign = ({commit}, payload) => {
    let formData = new FormData();
    Object.keys(payload).forEach(key => formData.append(key, payload[key]));
    return  axios.post('/register', formData)
    .then(({ data }) => {
        return {verificacao: false, msg: ''};
      })
    .catch(error => {
        return {verificacao: true, msg: error.response.data != undefined ? error.response.data.error : 'Erro ao realizar cadastro'};
    });
};