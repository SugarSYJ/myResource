import React from 'react'
import ReactDOM from 'react-dom'

class Component1 extends React.Component{
    state = {
        count:0
    }
    increment(){
        this.setState({
            count:this.state.count + 1
        })
        // this.refs.c2.increment()
    }
    render(){
        let el = null;
        if(this.state.count % 2 == 0){
            el = <Component2 data={this.state.count} increment={this.increment.bind(this)}/>
        }else{
            el = null;
        }
        return (
            <div>
                <h1>Component1-{this.state.count}</h1>
                <input type="button" value="increment" onClick={this.increment.bind(this)} />
                {el}
            </div>
        )
    }
}
class Component2 extends React.Component{
    state = {
        count:0
    }
    componentWillReceiveProps(newProps){
        // console.log(newProps)
        this.setState({
            count:newProps.data
        })
    }
    shouldComponentUpdate(props,state){
        console.log(props,state)
        return state.count % 2 == 0;
    }
    componentWillUnmount(){
        console.log(11)
    }
    increment(){
        // this.props.data
        this.setState({
            count:this.state.count + 2
        })
        this.props.increment()
    }
    render(){
        return (
            <div>
                <h1>Component2-{this.state.count}</h1>
            </div>
        )
    }
}

ReactDOM.render(<Component1 />,document.getElementById('app'));