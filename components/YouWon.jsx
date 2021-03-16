import React, {Component} from 'react';

//this component expects the props: x, y -- upper left corner of the component
class YouWon extends Component {
	render() {
		//style to use for the component
        const myStyle = {
            top:this.props.y,
            left:this.props.x,
			width:320,
			height:25,
			background:'#FFFFFF',
			borderWidth:5,
			borderColor:'#B49FDC',
			borderStyle:'solid',
            position: 'absolute',
            fontFamily: 'monospace',
            padding: '10px',
            textAlign: 'center',
            fontSize: '18px'
            
		};
        return (<div style={myStyle}>You won!</div>);
	}
};

export default YouWon;
