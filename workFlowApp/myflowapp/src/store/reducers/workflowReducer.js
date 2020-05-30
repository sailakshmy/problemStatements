const initState = {
    workflows: [
        {id:'1', workflowTitle: 'Workflow1'},
        {id:'2', workflowTitle: 'Workflow2'},
        {id:'3', workflowTitle: 'Workflow3'}
    ]
}

const workflowReducer=(state=initState,action)=>{
    //Identify the type of action coming in using switch
    switch(action.type){
        case 'ADD_WORKFLOW':
            console.log('Added a new workflow',action.workflow);
            return state;
        case 'ADD_WORKFLOW_ERROR':
            console.log('Adding a new workflow resulted in error',action.err);
            return state;
        default:
            return state;
    }
    
}


export default workflowReducer;