import React, {Component} from 'react';
import App from '../App';
import carsGame from '../utils/carsGame.js';

let theCars = new carsGame();

class Game extends Component
{
    render()
    {
   	 return ( <App cars={theCars} /> );
    }
};

export default Game;
