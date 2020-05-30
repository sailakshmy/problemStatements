const initState = {
    nodes:[
        {id:'1', title: 'Node1', content:'Content for Node 1'},
        {id:'2', title: 'Node2', content:'Content for Node 2'},
        {id:'3', title: 'Node3', content:'Content for Node 3'},

    ]
}

const nodeReducer=(state=initState,action)=>{
    return state;
}


export default nodeReducer;