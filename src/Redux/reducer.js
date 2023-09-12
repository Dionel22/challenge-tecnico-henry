const { GETFORMS, POSTFORMS, PUTFORMS, IDFORMS } = require("./action");

const initialState = {
    allForms: [],
    editForms: [],
    idForms: [],
}

const reducer = (state = initialState ,action) => {
    switch (action.type) {
        case GETFORMS:
            return {
                ...state,
                allForms: action.payload
            }
        case IDFORMS:
            return {
                ...state,
                idForms: action.payload
            }
        case PUTFORMS:
            return {
                ...state,
                editForms: action.payload
            }
        case POSTFORMS:
            return {
                ...state,
                allForms:[...state.allForms ,action.payload]
            }
        default:
            return state;
    }
}

export default  reducer;