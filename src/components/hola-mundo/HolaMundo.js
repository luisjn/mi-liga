import React from 'react';
import './HolaMundo.css';

class HolaMundo extends React.Component {
    render() {
        return (
            <div>
                <h1>Hola {this.props.nombre} </h1>
                <h2> {this.props.edad} </h2>
            </div>
        );
    }
}

export default HolaMundo;