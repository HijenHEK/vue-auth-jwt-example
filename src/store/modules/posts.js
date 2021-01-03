
import axios from 'axios'


const Posts = {
    namespaced : true ,
    state : {
        posts : {}
    },

    mutations : {
        setPosts(state , posts){
            state.posts = posts
        }
    },

    actions : {
        getPosts(ctx) {
            axios.get('http://www.jwtexample.test/api/posts').then((response) => {
                ctx.commit('setPosts' , response.data)
            })
        }
    }

}


export default Posts