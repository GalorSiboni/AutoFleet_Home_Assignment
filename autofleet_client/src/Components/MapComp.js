import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import { useSelector, useDispatch } from "react-redux";
import locationService from '../Services/locationService';
import { setIdArrayInsideCurrentPolygon } from '../Actions';
import Grid from '@material-ui/core/Grid'
import Button from 'react-bootstrap/Button';


const CarComponent = ({ text }) => <div>{text}</div>;

const MapComp = () => {
    const dispatch = useDispatch();
    const defaultProps = {
        center: {
            lat: useSelector(state => state.allLocations)[0].location.lat,
            lng: useSelector(state => state.allLocations)[0].location.lng
        },
        zoom: 11
    }
    //set here the polygon you want to draw on the map
    const [polygonCoords, setPolygonCoords] = useState(
        [ 
            { lat: 51.509865, lng: -0.118092 },
            { lat: 51.418278, lng: -0.237845 },
            { lat: 51.410976, lng: -0.20755833 },
            { lat: 51.4514312744, lng: -0.0712783337 }
        ]);
    const handleApiLoaded = (map, maps) => {
        getIdArray(polygonCoords, dispatch);
        var somePolygon = new maps.Polygon({
            paths: polygonCoords,
            key: 1,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35
        });
        somePolygon.setMap(map);
    }
    const handlePolygonCoordSwap= () => {
        console.log(polygonCoords)
        setPolygonCoords( 
            { lat: 51.5456123352, lng: -0.0912433416 },
            { lat: 51.4598884583, lng: -0.1210350022 },
            { lat: 51.4746818542, lng: -0.0307649989 },
            { lat: 51.4514312744, lng: -0.0712783337 }
        );
        console.log(polygonCoords)
    }
    return(
        <Grid container>
            <Grid item xs={9}>
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.APIKEY }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) =>  handleApiLoaded(map, maps)}
                    >
                    {useSelector(state => state.allLocations).map((car) => (  
                        <CarComponent key={car.id}
                            lat={car.location.lat}
                            lng={car.location.lng}
                            text={"*"}/> //Car
                    ))}
                    </GoogleMapReact>
                </div>
            </Grid>
            <Grid item xs={3}>
                <div>
                    <div>
                        <Button variant="primary" size="lg" onClick={handlePolygonCoordSwap}>
                            Swap Polygon Coordinates
                        </Button>
                    </div>
                    <ul>
                        <h5>
                        {"There is " + useSelector(state => state.idArrayInsidePolygon).length + " cars inside the Polygon, Here is there Id's:"}
                        </h5>
                        {useSelector(state => state.idArrayInsidePolygon).map((id, key) => {return <li key={key}> {id} </li>})}
                    </ul>
                </div>
            </Grid>
        </Grid>
        
    )
}

function getIdArray(polygon, dispatch) {
    let latLngArray = []
    // Append a single item
    Object.keys(polygon).forEach(key => latLngArray.push([polygon[key].lat, polygon[key].lng]))
    locationService.getIdArrayInsidePolygon(latLngArray).then(response => {
        dispatch(setIdArrayInsideCurrentPolygon(response.data));
    }).catch(e => {
        console.error(e.message);
    });
    }

export default MapComp;

