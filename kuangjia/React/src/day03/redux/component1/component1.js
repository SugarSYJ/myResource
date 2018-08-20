import React from 'react'
import store from '../store'

export default class Component1 extends React.Component{
   
    render(){
        return (
            <div>
                <h1>Component1-{store.getState().calc}</h1>
            </div>
        )
    }
}