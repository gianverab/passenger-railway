import React, { Component } from 'react';
import RouteB from './RouteB';
import RouteC from './RouteC';
import RouteD from './RouteD';
import RouteE from './RouteE';

class DisplayRoutes extends Component {
    render() {
        const selectedCity = this.props.selectedCity;
        let route;
        
        // Conditional rendering of Route component
        if (selectedCity === 'B') {
            route = <RouteB selectedCity={selectedCity} selectedRoute={this.props.selectedRoute} />
        } else if (selectedCity === 'C') {
            route = <RouteC selectedCity={selectedCity} selectedRoute={this.props.selectedRoute} />
        } else if (selectedCity === 'D') {
            route = <RouteD selectedCity={selectedCity} selectedRoute={this.props.selectedRoute} />
        } else if (selectedCity === 'E') {
            route = <RouteE selectedCity={selectedCity} selectedRoute={this.props.selectedRoute} />
        }
        return(
            <div>
               {route} 
            </div>
        )
    }
}

export default DisplayRoutes;
