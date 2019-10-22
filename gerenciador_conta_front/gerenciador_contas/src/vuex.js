import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
//Dividindo a estrutura em modulos
const moduleCounter = {
    //estado
    state:{
        counter: 0,
    },
    //modificações - métodos que modificam meu estadp
    mutations:{
        decrementar: state => state.counter--,
        incrementar: state => state.counter++
    },
    //Getters para meu objeto de estado
    getters:{
        counter: state => state.counter
    },
    //Minhas actions para chamadas de API e utilização das minhas mutations
    actions:{
        decrement: ({ commit }) => commit('decrementar'),
        increment: ({ commit }) => {
            setTimeout( () => {
                commit('incrementar'); 
            }, 2000)
        },
    }   
}

const store = new Vuex.Store({
    modules: {
        counter: moduleCounter
    }
})

export { store }