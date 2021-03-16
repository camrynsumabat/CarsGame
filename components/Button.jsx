import React, { Component } from 'react';

class Button extends Component {

    render()
    {
        const myStyle = {
            width: 100,
            height: 20,
            background: '#FFFFFF',
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 12,
            textAlign: 'center',
            fontSize: 16,
            padding: 10,
            margin: 3
        };

        return (<span style={myStyle} onClick={this.props.action}>{this.props.label}</span>);
    }
}

export default Button;