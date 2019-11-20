"use strict";

import Vue from 'vue';
import axios from "axios";
import * as storage from '../storage/user/storage'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

let config = {
  //baseURL:'http://guarded-headland-11685.herokuapp.com',
  baseURL: 'http://localhost:9000/api',
  // baseURL: process.env.basexURL || process.env.apiUrl || ""
  timeout: 60 * 1000, // Timeout
  //withCredentials: true, // Check cross-site Access-Control
  crossDomain: true,
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    const token = storage.getLocalToken();

    if ( token != null ) {
      config.headers.common['Authorization'] = 'Bearer '+ token;
      config.headers.common['accept'] = 'application/json';
    }

    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
