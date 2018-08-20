import React from 'react'
import {createStore,combineReducers} from 'redux'

import calcReducer from './reducer'
import cplcReducer from './component1/reducer'

const rootReducer = combineReducers({
    calc:calcReducer,
    cp1:cplcReducer
});

const store = createStore(rootReducer)

export default store;