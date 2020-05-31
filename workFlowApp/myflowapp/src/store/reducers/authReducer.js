const initState = {
    authError:''
}

const authReducer=(state=initState,action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS':
            console.log('Login Success');
            return{
                ...state,
                authError: null
            };
        case 'LOGIN_ERROR':
            console.log('Login Error');
            return {
                ...state,
                authError:'Login failed'
            };
        case 'LOGOUT_SUCCESS':
            console.log('SignOut Success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('Signup Success');
            return{
                ...state,
                authError: null
            };
        case 'SIGNUP_ERROR':
            console.log('Signup error');
            return{
                ...state,
                authError: action.e.message
            };
        default:
            return state;

    }
   
}


export default authReducer;