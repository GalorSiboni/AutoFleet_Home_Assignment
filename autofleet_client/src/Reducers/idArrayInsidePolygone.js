const idArrayInsidePolygonReducer = (state = [], action) => {

    switch (action.type) {
        case 'SET_ID_INSIDE_POLYGONE':
            state = action.payload;
            return state;
        default:
            return state;
    }
};

export default idArrayInsidePolygonReducer;