import http from '../utils/httpclient'
import * as constants from '../components/datagrid/constants'

export default function middleware(api){
    return function(dispatch){
        return function(action){
            let {url, data, method, types} = action;
            if(!url){
                dispatch(action)
            }else{
                dispatch({
                    type: constants.REQUESTING
                })
                http[method](url, data).then((res) => {
                    dispatch({
                        type: constants.REQUESTED,
                        data: res.data
                    })
                }).catch((error) => {
                    dispatch({
                        type: constants.REQUESTERROR,
                        error: error
                    })
                })
            }
        }
    }
}