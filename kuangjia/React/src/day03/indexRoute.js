import React from 'react'
import {Route,IndexRoute} from 'react-router'

class AppComponent extends React.Component{
    render(){
        return <div>{this.props.children}</div>
    }
}
class LoginComponent extends React.Component{
    render(){
        return <div>Login</div>
    }
}
class HomeComponent extends React.Component{
    componentDidMount(){
        this.props.router.setRouteLeaveHook(
            this.props.route,
            this.willLeave
        )
    }
    willLeave(){
        return 'r u sure'
    }
    render(){
        return <div>Home</div>
    }
}
class DatagridComponent extends React.Component{
    render(){
        return <div>Datagrid</div>
    }
}

let isLogin = (nextState,replace,next)=>{
    if(window.localStorage.getItem('auth')){
        next();
    }else{
        replace({pathname:'/login'});
        next();
    }
}
const routes = (
    <Route path="/" component={AppComponent}>
        <IndexRoute component={DatagridComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route path="/home" component={HomeComponent} onEnter={isLogin}/>
        <Route path="/datagrid" component={DatagridComponent} />
    </Route>
)

export default routes