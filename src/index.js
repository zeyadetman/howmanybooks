import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Library from '../src/components/Library/Library';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Library />, document.getElementById('root'));
registerServiceWorker();
