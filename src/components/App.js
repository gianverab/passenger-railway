import React, { Component } from 'react';
import Main from './Main';
import ChooseRouteForm from './ChooseRouteForm';
import DisplayRoutes from './DisplayRoutes';
import '../App.css';

class App extends Component {
  state = {
    currentCity: 'A',
    selectedCity: '',
    selectedRoute: '',
  }
  setCity = city => {
    // Set the selected city to our state
    this.setState({
      selectedCity: city,
    });
  };
  setRoute = route => {
    // Set the selected route to our state
    this.setState({
      selectedRoute: route,
    });
  };

  render() {
    // Destructuring state assignment
    const { currentCity, selectedCity, selectedRoute } = this.state;

    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Passenger Railway</h1>
        </header>
        <Main currentCity={currentCity} setCity={this.setCity}/>
        {
          selectedCity 
          ? 
            // If selectedCity render the following div tag
            <div>
              <p>Great! It looks like you are going to visit the city {selectedCity}.
                <br/>
                Now you have to select one route from the following options to arrive destination.
              </p> 
              <ChooseRouteForm setRoute={this.setRoute} selectedCity={selectedCity}/>
              {
                selectedRoute
                ?
                  // If selectedRoute render the DisplayRoutes component
                  <DisplayRoutes selectedCity={selectedCity} selectedRoute={selectedRoute} />
                  // If !selectedRoute render this text
                : <p><i>In this area you will see the available routes and more information.</i></p>
              }
            </div>
            // If !selectedCity render this text
          : <p><i>Once you choose a city we will show you the next steps to continue.</i></p>
        }
      </div>
    );
  }
}

export default App;
