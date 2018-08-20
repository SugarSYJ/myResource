import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,Link,browserHistory} from 'react-router'

let Root = () => {
    return <div><Link to="/login">Login</Link><Link to="/register">Register</Link><h1>Root</h1></div>
}
let Login = () => {
    return <div><Link to="/login">Login</Link><Link to="/register">Register</Link><h1>Login</h1></div>
}
let Register = () => {
    return <div><Link to="/login">Login</Link><Link to="/register">Register</Link><h1>Register</h1></div>
}
let Order = (props) => {
    console.log(props)
    return <h1>Order-{props.params.orderid}</h1>
}

// ReactDOM.render(
//     <Router history={hashHistory}>
//         <Route path="/" component={Root} />
//         <Route path="/login" component={Login} />
//         <Route path="/register" component={Register} />
//         <Route path="/order(/:orderid)" component={Order} />
//     </Router>,
//     document.getElementById('app')
// )

import routes from './indexRoute'
 ReactDOM.render(
    <Router history={hashHistory} routes={routes}/>,
    document.getElementById('app')
)