import React, {Component} from 'react';
import {WID, HGT, GRID, WALL} from '../utils/constants.js';
import Square from './Square.jsx';
import CarView from './CarView.jsx';
import YouWon from './YouWon.jsx';
import Button from './Button.jsx';

class BoardView extends Component
{
    constructor(props)
    {
        super(props)
        this.handleNext = this.handleNext.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    handleNext(event)
    {
        this.props.cars.nextPuzzle()
    }

    handleReset(event)
    {
        this.props.cars.resetPuzzle()
    }

    render()
    {
		// Width and height of the board area, then the style
		const bWid = WID * GRID;
		const bHgt = HGT * GRID;
        const bStyle = {
            top: WALL,
  			left: WALL,
  			width: bWid,
  			height: bHgt,
  			position: 'absolute'
        };
        const tStyle = {
            position: 'relative',
            width: bWid + (WALL*2),
            height: bHgt + 30,
            backgroundColor: "grey"
        };
        const goal = {
            position: 'absolute',
            top: (2 * GRID),
            left: bWid,
            width: WALL,
            height: GRID,
            backgroundColor: "white"
        };

		// Make a list of things to fill the board:
		let list = [];
		let key = 1;
		for (let x = 0; x < WID; x++) {
  			let cx = x * GRID;
  			for (let y = 0; y < HGT; y++) {
    				let cy = y * GRID;
    				list.push(<Square key={key++} x={cx} y={cy} />);
  			}
        }

        list.push(<div style={goal}></div>);
		
		const cars = this.props.cars;
		const num = cars.getNumCars();
		for (let i = 0; i < num; i++)
		{
   			const { id, x, y, ncols, nrows, color } = cars.getCar(i);
  			list.push(
				<CarView 
				key={key++} 
				x={x*GRID} 
				y={y*GRID} 
				wid={ncols*GRID} 
				hgt={nrows*GRID} 
				color={color}
				idNum={id} 
				cars={this.props.cars}
				/>);
		}

        //Display "You Won!" Banner if player has won
		if(cars.hasWon())
		{
            list.push(<YouWon cx={WID * GRID / 2} cy={HGT * GRID / 2}/>);
        }

        return (
            <div>
                <div style={tStyle}>
                    <div style={bStyle}>{list}</div>
                </div>
                <div><br /></div>
                <table>
                    <tr>
                        <td><Button action={this.handleReset} label="Reset"/></td>
                        <td><Button action={this.handleNext} label="Next Level"/></td>
                        <td>Level {this.props.cars.puzzleNumber}</td>
                        <td> Goal {this.props.cars.bestNumMoves}</td>
                        <td> Moves {this.props.cars.numMoves}</td>
                    </tr>
                </table>
            </div>);	

};
}

export default BoardView;
