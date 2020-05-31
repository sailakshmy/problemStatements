export const signIn = (credentials)=>{
    return (dispatch, getState, {getFirebase})=>{
        //Initialize the firebase 
        const firebase = getFirebase();
        //Sign the user in using firebase authentication service
        firebase.auth().signInWithEmailAndPassword(credentials.email,credentials.password)
        //Since this is an async call, using Promises
        .then(()=>{
            dispatch({type:'LOGIN_SUCCESS'})
        })
        .catch((e)=>{
            dispatch({type:'LOGIN_ERROR',e})
        })
    }
}

export const signOut=()=>{
    return(dispatch, getState,{getFirebase})=>{
        const firebase  = getFirebase();
        firebase.auth().signOut()
        //Async code
        .then(()=>{
            dispatch({type:'LOGOUT_SUCCESS'})
        });

    }
}

export const signUp=(newUser)=>{
    return(dispatch,getState,{getFirebase, getFirestore})=>{
        const firebase = getFirebase();
        const firestore= getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName
            })
        }).then(()=> dispatch({type:'SIGNUP_SUCCESS'}))
        .catch((e)=> dispatch({type:"SIGNUP_ERROR",e}));
    }
}