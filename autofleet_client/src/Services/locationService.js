import http from "../http-common";

const getAllLocations = () => {
    return http.get(`/locations`);
};

const getIdArrayInsidePolygon = (Polygon) => {
    return http.post(`/getAllIdsInsidePolygon`, Polygon);
}

export default {
    getAllLocations,
    getIdArrayInsidePolygon
};