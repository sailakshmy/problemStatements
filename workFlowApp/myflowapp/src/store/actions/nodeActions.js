//Using action creator to halt the dispatch action for Async DB calls
export const createNode = (node)=>{
    /*{getFirebase, getFirebase} can be used to interact with the firebase and firestore*/
    return(dispatch, getState, {getFirebase, getFirestore})=>{
        //make DB call here
        dispatch({type:'ADD_NODE',node})

    }
};