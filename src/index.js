import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Material
import CssBaseline from '@material-ui/core/CssBaseline';

// Estilos
import './index.css';

// Componentes
import Header from './components/common/header/Header';
import Liga from './components/liga/Liga';
import Calendario from './components/calendario/Calendario';

// The CODE!
const Root = () => {
    return (
        <div>
            <CssBaseline />
            <Header />
            <div className="contenedor">
                <Liga />
                <Calendario />
            </div>
        </div>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
