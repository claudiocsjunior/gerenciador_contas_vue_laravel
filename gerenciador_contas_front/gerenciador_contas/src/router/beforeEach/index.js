import store from '../../store'

export default async (to, from, next) => {
  document.title = to.name + 'GCONT';

  if(to.name !== 'login' && !store.getters['auth/hasToken']){
    try {
        await store.dispatch('auth/ActionCheckToken');
        next({path: to.path});
    }catch (e) {
        next({name: 'login'})
    }
  }else{
    if((to.name === 'login' || to.name === 'sign') && store.getters['auth/hasToken']){
        next({ name: 'home' })
    }else{
        next()
    }
  }
};