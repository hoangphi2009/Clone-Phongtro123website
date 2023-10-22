const initSate ={
    isLoggedIn: false,
    token:  null
}
const authReducer = (state = initSate, action) => {
    switch (action.type) {

        default:
            return state;
    } 
 }
 export default authReducer