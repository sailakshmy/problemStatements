//Using action creator to halt the dispatch action for Async DB calls
export const createWorkflow = (workflow)=>{
    return(dispatch, getState)=>{
        //make cal to DB here
        dispatch({type:'ADD_WORKFLOW',workflow: workflow})
        
    }
}