import React from 'react'

import Datagrid from '../datagrid/datagrid'

class CNode extends React.Component{
    static defaultProps = {
        config: {
            url: 'https://cnodejs.org/api/v1/topics',
            data: {page:1, limit: 10},
            cols: 'title,visit_count,reply_count,last_reply_at',
            key: 'id'
        }
    }
    render(){
        return <Datagrid config={this.props.config} />
    }
}

export default CNode