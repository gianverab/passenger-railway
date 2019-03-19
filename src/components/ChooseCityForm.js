import React, { Component } from 'react';

class ChooseCityForm extends Component {
    // Creating Ref
    cityRef = React.createRef();

    chooseCity = event => {
        // Stop the form from submitting
        event.preventDefault();
        // Getting the value with Ref
        const city = this.cityRef.current.value;
        // Calling the setCity function
        this.props.setCity(city);
    };

    render() {
        return(
            <form className="choose-city-form" onSubmit={this.chooseCity}>
                <select name="city" ref={this.cityRef} required>
                    <option value="" hidden>Select a City</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                </select>
               <button type="submit">Send</button>
            </form>
        )
    }
}

export default ChooseCityForm;