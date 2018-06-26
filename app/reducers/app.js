export const initialState = {
    initialized: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALIZED':
            return {
                ...initialState,
                initialized: true,
            };
        default:
            return state;
    }
};
