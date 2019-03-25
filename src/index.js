import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

import HolaMundo from './components/HolaMundo';

render(<HolaMundo />, document.getElementById('root'));

serviceWorker.unregister();
