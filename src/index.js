import React from 'react';
import { render } from 'react-dom';

class HolaMundo extends React.Component {
    render() {
        return <p>Hola mundo</p>
    }
}

render(<HolaMundo/>, document.getElementById('root'))
