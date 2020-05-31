//Using action creator to halt the dispatch action for Async DB calls
export const createNode = (node,id)=>{
    /*{getFirebase, getFirebase} can be used to interact with the firebase and firestore*/
    return(dispatch, getState, {getFirebase, getFirestore})=>{
        //make DB call here
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        firestore.collection('nodes')
        .add({
            ...node,
            authorFirstName:profile.firstName,
            authorLastName: profile.lastName,
            createdAt: new Date()
        })
        .then((resp)=> {
            console.log('Inside the updateNode '+ id);
            console.log(resp.id);
            let workflow = firestore.collection('workflows').doc(id);
            let nodeArr = workflow.update({nodes: firestore.FieldValue.arrayUnion(resp.id)});
            
        })
       // .then(()=> console.log('Outside the updateNode '+ id))
        .catch((e)=>dispatch({type:'ADD_NODE_ERROR',e}));
        

    }
};

export const deleteNode = (node,id)=>{
    /*{getFirebase, getFirebase} can be used to interact with the firebase and firestore*/
    return(dispatch, getState, {getFirebase, getFirestore})=>{
        //make DB call here
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        firestore.collection('nodes').doc(node.id).delete()
        .then((resp)=> {
            console.log('Inside the updateNode '+ id);
            console.log(resp.id);
            let workflow = firestore.collection('workflows').doc(id);
            let nodeArr = workflow.update({nodes: firestore.FieldValue.delete(resp.id)});
            
        })
       // .then(()=> console.log('Outside the updateNode '+ id))
        .catch((e)=>dispatch({type:'DELETE_NODE_ERROR',e}));
        

    }
};