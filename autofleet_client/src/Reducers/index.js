import allLocationsReducer from "./allLocations";
import idArrayInsidePolygonReducer from "./idArrayInsidePolygone";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    allLocations: allLocationsReducer,
    idArrayInsidePolygon: idArrayInsidePolygonReducer
});
export default allReducers;