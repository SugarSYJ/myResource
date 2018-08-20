import React from 'react'
import ReactDOM from 'react-dom'
import * as actions from './actions'

import store from './store'
import CP1 from './component1/component1'

class Clac extends React.Component{
    state = {
        count:0
    }
    increment(){
        store.dispatch(actions.increment());
        console.log(store.getState())
        this.setState({
            count:store.getState().cp1
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <input type="button" value="increment" onClick={this.increment.bind(this)}/>
                <CP1 />
            </div>
        )
    }
}
ReactDOM.render(<Clac />,document.getElementById('app'))