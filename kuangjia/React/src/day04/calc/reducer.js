import * as constants from './constants'

export default (state = {},action) => {
    let _state = JSON.parse(JSON.stringify(state));
    console.log(action)
    switch(action.type){
        case constants.ADD:
            _state.count = _state.count + 1;
            break;
        case constants.MINUS:
            _state.count = _state.count - 1;
            break;
        case constants.AJAX:
            _state.data = action.data;
            break;
        default:
            _state.count = 0;
            break;
    }
    return _state
}