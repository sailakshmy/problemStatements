const initState = {
    workflows: [
        {id:'1', title: 'Workflow1'},
        {id:'2', title: 'Workflow2'},
        {id:'3', title: 'Workflow3'}
    ]
}

const workflowReducer=(state=initState,action)=>{
    return state;
}


export default workflowReducer;