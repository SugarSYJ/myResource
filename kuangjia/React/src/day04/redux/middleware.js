import http from 'superagent'
import * as constants from '../calc/constants'

export default function middleware(api){
    return function(dispatch){
        return function(action){
            const {type,url} = action;
            if(!url){
                dispatch(action)
            }else{
                http.get(url).end((error,res)=>{
                    console.log(error,res)
                    dispatch({
                        type,
                        data:res.body.data
                    })
                })
            }
        }
    }
}