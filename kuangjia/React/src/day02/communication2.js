import React from 'react'
import ReactDOM from 'react-dom'

class ComponentA extends React.Component{
    state = {
        count:0
    }
    increment(){
        this.setState({
            count:this.state.count + 1
        })
        this.props.increment()
    }
    render(){
        return (
            <div>
                <h1>ComponentA-{this.state.count}</h1>
                <input type="button" value="increment-A" onClick={this.increment.bind(this)} />
            </div>
        )
    }
}
class ComponentB extends React.Component{
    state = {
        count:0
    }
    increment(){
        this.setState({
            count:this.state.count + 2
        })
    }
    render(){
        return (
            <div>
                <h1>Component2-{this.state.count}</h1>

            </div>
        )
    }
}

class Parent extends React.Component{
    increment(){
        this.refs.cb.increment()
    }
    render(){
        return (
            <div>
                <ComponentA increment={this.increment.bind(this)}/>
                <ComponentB ref="cb"/>
            </div>
        )
    }
}

ReactDOM.render(<Parent />,document.getElementById('app'));