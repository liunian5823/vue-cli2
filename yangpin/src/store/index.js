import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// import cookie from '../axios/cookie.js'
const userInfo={
    name:localStorage.getItem("name")||'',
    token:localStorage.getItem("token")||''
}

export default new Vuex.Store({
    state:{
        userInfo
    },
    actions:{
        users(user){
            console.log(user)
            user.commit('usersinfo')
        }
    },
    mutations:{
        usersinfo(state){
            state.userInfo={
                name:localStorage.getItem("name")||'',
                token:localStorage.getItem("token")||''
            }
            console.log('执行过了')            
        }
    }
})