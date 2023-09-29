const INITIAL_STATE={
    option:'home',
    id:''
}
function OptionReducer (state=INITIAL_STATE,action){
    switch (action.type) {
        case 'HOME':
          return { ...state, option: 'home' };
        case 'ADD':
          return { ...state, option: 'add' };
        case 'UPDATE':
            const id=action.payload;
            console.log(id);
          return { ...state, option: 'update' ,id : id};
        default: return state;
      }
}
export default OptionReducer;