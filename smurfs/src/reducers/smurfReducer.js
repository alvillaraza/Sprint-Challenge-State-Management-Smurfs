export const smurfReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SMURFS':
            return [
                ...state,
                {
                    name: action.payload,
                    age: action.payload,
                    height: action.payload,
                    id: Date.now()
                }
            ];
        default: return state;  
                      
    }
}

