import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

import HolaMundo from './components/hola-mundo/HolaMundo';

render(<HolaMundo nombre='Luis' edad='23' />, document.getElementById('root'));

serviceWorker.unregister();
