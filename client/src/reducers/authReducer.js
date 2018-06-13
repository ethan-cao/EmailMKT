export default function(state = {}, action){
    console.log("@@@ authReducer : " + action);

    switch (action.type){
        default:
            return state;
    }
};