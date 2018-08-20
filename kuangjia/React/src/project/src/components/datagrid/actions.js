import * as ajax from './constants'

export function refresh(config){
    return {
        types: [ajax.REQUESTING, ajax.REQUESTED, ajax.REQUESTERROR],
        url: config.url,
        data: config.data || {},
        method: config.method || 'get'
    }
}
