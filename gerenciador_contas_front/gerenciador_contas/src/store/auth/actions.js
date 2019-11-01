import * as types from './mutation-types';

export const ActionSign = ({commit}, payload) => {
      
    console.log(payload);
    return axios({
        method: 'post',
        url: 'register',
        data: payload,
        config
      })
    .then(function (response) {
        console.log(response);
    });
};