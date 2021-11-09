import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAllLocations } from './Actions';
import locationService from './Services/locationService';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './Components/HomePage';
import MapComp from './Components/MapComp';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getData(dispatch);
  });

  return (
    <Router>
        <Switch>
          <Route path='/map' exact component={ MapComp }/>
          <Route path='/' exact component={ HomePage }/>
        </Switch>
    </Router>
  );
  
}
function getData(dispatch) {
  locationService.getAllLocations().then(response => {
    dispatch(setAllLocations(response.data));
}).catch(e => {
    console.error(e.message);
});
}
export default App;

