import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './redux/store'
import CNode from './components/cnode/cnode'

ReactDOM.render(
    <Provider store={store}>
        <CNode />
    </Provider>,
    document.getElementById('app')
)