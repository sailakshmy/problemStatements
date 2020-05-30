const initState = {
    workflows: [
        {id:'1', workflowNumber: 'Workflow1'},
        {id:'2', workflowNumber: 'Workflow2'},
        {id:'3', workflowNumber: 'Workflow3'}
    ]
}

const workflowReducer=(state=initState,action)=>{
    //Identify the type of action coming in using switch
    switch(action.type){
        case 'ADD_WORKFLOW':
            console.log('Added a new workflow',action.workflow)
    }
    return state;
}


export default workflowReducer;