import React from 'react';
import ReactDOM from 'react-dom';
import http from 'superagent';

http.get('https://cnodejs.org/api/v1/topics').query({page:1,limit:10}).end((error,res)=>{
    console.log(error,res);
});

class Datagrid extends React.Component{
    static defaultProps = {
        data: [
            {id:1,name:'Tom',age:18,gender:1},
            {id:2,name:'Sam',age:22,gender:1},
            {id:3,name:'Lucy',age:20,gender:0},
        ] 
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
                            this.getKeys(this.props.data[0]).map((item)=>{
                                return <th key={item}>{item}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map((item)=>{
                            return (
                            <tr>
                                {
                                    this.getKeys(item).map((key)=>{
                                        return <td>{item[key]}</td>
                                    })
                                }
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        )
    }
}

ReactDOM.render(<Datagrid />,document.getElementById('app'));