import http from 'superagent'

export default {
    get(url, data){
        return new Promise((resolve,reject) => {
            http.get(url).query(data).end((error, res) => {
                if(error){
                    reject(error)
                } else {
                    resolve(res.body)
                }
            })
        })
    }
}