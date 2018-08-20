export default (state = 0,action)=>{
    switch(action.type){
        case '+':
            state += 1;
            break;
        case '-':
            state -= 1;
            break;
        default:
            state = 0;
    }
    return state;
}