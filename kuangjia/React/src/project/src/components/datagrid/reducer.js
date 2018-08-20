import * as constants from './constants'

export default (state = {}, action) => {
    let _state = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case constants.REQUESTING:
            _state.loading = true;
            break;
        case constants.REQUESTED:
            _state.loading = false;
            _state.data = action.data;
            break;
        case constants.REQUESTERROR:
            _state.loading = false;
            _state.error = action.error;
            break;
    }
    return _state
}