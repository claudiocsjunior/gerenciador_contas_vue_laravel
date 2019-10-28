import { store } from "../modules/auth"

export default req => {
    return ({status}) => {
        if(status == 401){
            store.dispatch('auth/ActionSignOut')
            window._Vue .$router.push({name: 'login'})
        }
    }
}