import React, { Component } from 'react';
import ChooseCityForm from './ChooseCityForm';
import { getCities } from '../data';

class Main extends Component {
    render() {
        // Destructuring props assignment
        const { currentCity, setCity } = this.props;

        // Getting the cities
        const cities = getCities();
        return(
            <div className="app-main">
                <h2>Welcome Dear User!</h2>
                <p>You are in the neighborhood of the city {currentCity}.</p>
                <p>Here you can choose different ways to visit the cities {cities.city1}, {cities.city2}, {cities.city3} and {cities.city4}.</p>
                <ChooseCityForm setCity={setCity}/>
            </div>
        )
    }
}

export default Main;