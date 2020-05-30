//Using action creator to halt the dispatch action for Async DB calls
export const createWorkflow = (workflow)=>{
    /*{getFirebase, getFirebase} can be used to interact with the firebase and firestore*/
    return(dispatch, getState,{getFirebase, getFirestore})=>{ 
        //make call to DB here
        /*To add data to the firestore, initialise the getFirestore function and store it in a constant,
        so that it gives a reference to the Firestore DB */
        const firestore = getFirestore();
        //Access the workflows Collection inside the firestore DB
        firestore.collection('workflows')
        //Add the new workflow document to the collection
        .add({...workflow,
            /*Since the workflow only has details regarding the workflowStatus and workflowTitle,
            add the details regarding the author */
            authorFirstName:'S',
            authorLastName:'L' 
        })
        /**This is an async call, so using promises */
        .then(()=>{
            dispatch({type:'ADD_WORKFLOW',workflow: workflow})
        })
        .catch((e)=>{
            dispatch({type:'ADD_WORKFLOW_ERROR',e: e})
        })

        
        
    }
}