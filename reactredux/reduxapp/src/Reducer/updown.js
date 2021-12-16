
const initialState ='';

const changeNumber=(state=initialState,action)=>{

        // switch(action.type){

        //     case 'increment' :return state + 1;
        //     case 'decrement' :return state - 1;
        // }
        if (action.type==='increment'){
            return state + 1;
        }else{
            return state - 1;
        }

        
}
export default changeNumber;