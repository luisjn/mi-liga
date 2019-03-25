import React from 'react';
import './HolaMundo.css';

class HolaMundo extends React.Component {
    render() {
        return (
            <div>
                <h1>Hola {this.props.nombre} </h1>
                <h2> {this.props.edad} </h2>
                <p className={ this.props.tipo }>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis consequuntur repellendus, maxime eveniet aliquid 
                architecto vitae pariatur exercitationem deleniti eligendi quia, 
                saepe porro mollitia voluptates rem cum deserunt enim autem?</p>
            </div>
        );
    }
}

export default HolaMundo;