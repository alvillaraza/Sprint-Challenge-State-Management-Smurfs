export const initialState = [
    {
        name: "Brainey",
        age: 200,
        height: "5cm",
        id: 0
    }
];

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SMURFS':
            return {
                ...state,
                // {
                //     ...state.name,
                // }
            };
        
        
            
    }
}