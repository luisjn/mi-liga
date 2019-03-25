import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

import HolaMundo from './components/HolaMundo';

render(<HolaMundo nombre='Luis' edad='23' />, document.getElementById('root'));

serviceWorker.unregister();
