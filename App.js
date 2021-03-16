import React, { Component } from 'react';
import BoardView from './components/BoardView.jsx';
import carsGame from './utils/carsGame.js';

class App extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {counter: 0};
		this.onBoardUpdate = this.onBoardUpdate.bind(this);
		props.cars.setRedrawCallback(this.onBoardUpdate);
	}

	onBoardUpdate(counter)
	{
		this.setState({counter: counter});
	}

	render()
	{
		return (<BoardView cars={this.props.cars} counter={this.state.counter}/>);
	}
}

export default App;
