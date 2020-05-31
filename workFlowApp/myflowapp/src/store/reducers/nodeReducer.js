const initState = {
    nodes:[
        /*{id:'1', nodeTitle: 'Node1', nodeDetails:'Content for Node 1',nodeStatus:'pending'},
        {id:'2', nodeTitle: 'Node2', nodeDetails:'Content for Node 2',nodeStatus:'completed'},
        {id:'3', nodeTitle: 'Node3', nodeDetails:'Content for Node 3',nodeStatus:'inprogress'},*/

    ]
}

const nodeReducer=(state=initState,action)=>{
    //Identify the type of action coming in using a Switch case
    switch(action.type){
        case 'ADD_NODE':
            console.log('Created Node', action.node);
            return state;
        
        case 'DELETE_NODE':
            console.log('Deleted the last node');
            break;

        case 'SHUFFLE_NODE':
            console.log('Shuffled the nodes');
            break;
        
        default:
            return state;
        
    }
    
}


export default nodeReducer;