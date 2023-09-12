const { GETFORMS, POSTFORMS, PUTFORMS } = require("./action");

const inicialState = {
    allForms: [],
    editForms: [],
}

const reducer = (state = inicialState ,action) => {
    switch (action.payload) {
        case GETFORMS:
            return {
                ...state,
                allForms: action.payload
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

module.exports = reducer;