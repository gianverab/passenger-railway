import React, { Component } from 'react';

class ChooseRouteForm extends Component {
    // Creating Ref
    routeRef = React.createRef();

    chooseRoute = event => {
        // stop the form from submitting
        event.preventDefault();
        // Getting the value with Ref
        const route = this.routeRef.current.value;
        // Calling the setRoute function
        this.props.setRoute(route);
    };

    render() {
        return(
            <form className="choose-route-form" onSubmit={this.chooseRoute}>
                <select name="route" ref={this.routeRef} required>
                    <option value="" hidden>Select a type of route</option>
                    <option value="a">Route with a max of 2 stops</option>
                    <option value="b">Route with a max of 4 stops</option>
                </select>
               <button type="submit">Send</button>
            </form>
        )
    }
}

export default ChooseRouteForm;