//Using action creator to halt the dispatch action for Async DB calls
export const createNode = (node)=>{
    return(dispatch, getState)=>{
        //make DB call here
        dispatch({type:'ADD_NODE',node})

    }
};