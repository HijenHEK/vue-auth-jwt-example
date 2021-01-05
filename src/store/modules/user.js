const User = {
    namespaced : true ,

    state : {
        user : null
    },
    getters : {
        user(state){
            return state.user
        }
    },
    mutations : {
        user(state , user){
            state.user = user
        },
        
    },

    actions : {
        user(ctx , user){
            
            ctx.commit('user' , user)
        }
    }

}


export default User