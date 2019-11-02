import * as types from './mutation-types';

export const ActionSign = ({commit}, payload) => {
    let formData = new FormData();
    Object.keys(payload).forEach(key => formData.append(key, payload[key]));
    return  axios.post('/register', formData)
    .then(({ data }) => {
         console.log(data)
      });

};