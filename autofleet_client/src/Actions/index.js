export const setAllLocations = (array) => {
    return {
        type: 'SET_ALL_LOCATIONS',
        payload: array
    };
};

export const setIdArrayInsideCurrentPolygon = (array) => {
    return {
        type: 'SET_ID_INSIDE_POLYGONE',
        payload: array
    };
};