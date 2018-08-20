import React from 'react';
import ReactDOM from 'react-dom';

class Component1 extends React.Component{
    constructor(props){
        super(props)
        // console.log(this);
        // this.increment = this.increment.bind(this);
    }
    static defaultProps = {
        name: "Tom"
    }
    state = {
        count: 0,
        option:3
    }
    increment(event){
        this.setState({
            count:this.state.count + 1
        })
        console.log(this.refs.file.files)
        console.log(this.f.files)
        // console.log(this.props.name);
    }
    change(e){
        // console.log(e.target.value)
        // e.target.value = e.target.value;
        this.setState({
            count:e.target.value,
            option:e.target.value
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <input type="button" value="increment" onClick={this.increment.bind(this)} />
                <input type="text" value={this.state.count} onChange={this.change.bind(this)}/>
                <select value={this.state.option} onChange={this.change.bind(this)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <input type="file" ref="file" />
                <input type="file" ref={f=>{this.f = f}} />
            </div>
        )
    }
}
ReactDOM.render(<Component1 name="Sam" />,document.getElementById('app'));