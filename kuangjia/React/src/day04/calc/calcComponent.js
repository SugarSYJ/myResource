import React from 'react'
import {connect} from 'react-redux'

import * as actions from './actions'

class ClacComponent extends React.Component{
    state = {
        count: 0
    }
    increment(){
        this.props.increment();
    }
    getdata(){
        this.props.getdata();
    }
    render(){
        return (
            <div>
                <h1>{this.props.count}</h1>
                <h2>{this.state.count}</h2>
                <input type="button" value="increment" onClick={this.increment.bind(this)} />
                <input type="button" value="getData" onClick={this.getdata.bind(this)} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        count: state.calc.count,
        data:state.calc.data || []
    }
}

const container = connect(mapStateToProps,actions)(ClacComponent);

export default container