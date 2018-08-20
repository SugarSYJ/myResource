export default (state = 0,action)=>{
    switch(action.type){
        case 'cp1+':
            state += 10;
            break;
        case 'cp-':
            state -= 1;
            break;
        default:
            state = 0;
    }
    return state;
}