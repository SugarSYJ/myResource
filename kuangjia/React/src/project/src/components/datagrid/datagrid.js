import React from 'react'
import {connect} from 'react-redux'

import * as actions from './actions'

let cols = null;

class Datagrid extends React.Component{
    getKeys(item = {}){
        return Object.keys(item);
    }
    componentWillMount(){
        cols = this.props.config.cols.split(',')
    }
    componentDidMount(){
        this.props.refresh(this.props.config);
    }
    render(){
        return (
            <table>
                <thead>
                    <tr>
                        {
                            this.getKeys(this.props.data[0]).map((key) => {
                                return cols.indexOf(key) > -1 ? <th key={key}>{key}</th> : null
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map((item) => {
                            return (
                                <tr key={item[this.props.config.key]}>
                                    {
                                        this.getKeys(item).map((key) => {
                                            return cols.indexOf(key) > -1 ? <td key={key}>{item[key]}</td> : null
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

const mapStatesToProps = (state) => {
    return {
        data: state.datagrid.data || []
    }
}
export default connect(mapStatesToProps,actions)(Datagrid)