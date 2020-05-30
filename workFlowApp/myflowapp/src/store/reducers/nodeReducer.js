const initState = {
    nodes:[
        {id:'1', nodeNumber: 'Node1', nodeDetails:'Content for Node 1'},
        {id:'2', nodeNumber: 'Node2', nodeDetails:'Content for Node 2'},
        {id:'3', nodeNumber: 'Node3', nodeDetails:'Content for Node 3'},

    ]
}

const nodeReducer=(state=initState,action)=>{
    //Identify the type of action coming in using a Switch case
    switch(action.type){
        case 'ADD_NODE':
            console.log('Created Node', action.node);
            break;
        
        case 'DELETE_NODE':
            console.log('Deleted the last node');
            break;

        case 'SHUFFLE_NODE':
            console.log('Shuffled the nodes');
            break;
    }
    return state;
}


export default nodeReducer;