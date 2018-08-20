import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'

import store from './redux/store'
import CalcComponent from './calc/calcComponent'

ReactDOM.render(
    <Provider store={store}>
        <CalcComponent />
    </Provider>,
    document.getElementById('app')
)