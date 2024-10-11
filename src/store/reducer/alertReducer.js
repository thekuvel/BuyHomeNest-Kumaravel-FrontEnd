
let initialState = {
    message : "",
    display : 0
}

let alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case "showAlert":
            return{
                ...state,
                message : action.message,
                display : 1,
            };
        case "reset":
            return{
                ...state,
                message : "",
                display : 0
            };
        default:
            return state
    }
};

export default alertReducer