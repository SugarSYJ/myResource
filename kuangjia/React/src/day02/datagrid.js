import React from 'react';
import ReactDOM from 'react-dom';
import http from 'superagent';



class Datagrid extends React.Component{
    state = {
        data: [] 
    }
    componentDidMount(){
        http.get('https://cnodejs.org/api/v1/topics').query({page:1,limit:10}).end((error,res)=>{
            console.log(res.body.data)
            this.setState({
                data:res.body.data
            })
        })
    }
    getKeys(item = {}){
        return Object.keys(item);
    }
    render(){
        return (
            <table>
                <thead>
                    <tr>
                        {
                            this.getKeys(this.state.data[0]).map((item)=>{
                                return <th key={item}>{item}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.map((item)=>{
                            return (
                            <tr>
                                {
                                    this.getKeys(item).map((key)=>{
                                        if(key=="author"){
                                            return null
                                        }
                                        return <td>{item[key]}</td>
                                    })
                                }
                                <td>{this.state.children}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        )
    }
}

ReactDOM.render(<Datagrid />,document.getElementById('app'));