const allLocationsReducer = (state = [], action) => {

    switch (action.type) {
        case 'SET_ALL_LOCATIONS':
            state = action.payload;
            return state;
        default:
            return state;
    }
};

export default allLocationsReducer;