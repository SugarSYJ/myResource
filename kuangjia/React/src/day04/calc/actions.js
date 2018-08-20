import * as constants from './constants'

export function increment(){
    return {
        type: constants.ADD
    }
}
export function decrement(){
    return {
        type: constants.MINUS
    }
}

export function getdata(){
    return {
        type: constants.AJAX,
        url: 'https://cnodejs.org/api/v1/topics?page=1&limit=10'
    }
}