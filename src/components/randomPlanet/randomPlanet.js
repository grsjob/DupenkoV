import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService'
import './randomPlanet.css';



export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    name: null,
    population: null,
    rotationPerion: null,
    diametr: null
  }

  constructor() {
    super();

    this.updatePlanet();
  }

  updatePlanet() {
    this.swapiService.getPlanet(7)
        .then((planet) => {
          this.setState({  //ты пытаешься корректировать стейт у еще несмонтированного компонента. Либо пробрасывай это пропсами, либо задавай напрямую в стейте. Реакт на такое ругается, т.к. ты асинхронно меняешь данные, но не в методе жизненного цикла
            name: planet.name,
            populatin: planet.population,
            rotationPeriod: planet.rotation_period,
            diametr: planet.diametr
          })
        })
  }

  render() {

    const {name, population, rotationPeriod, diametr} = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src="https://starwars-visualguide.com/assets/img/planets/5.jpg" />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diametr}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}