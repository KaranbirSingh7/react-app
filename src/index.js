import React from 'react';
import {
    render
} from 'react-dom';

// Local components here
import Router from './components/Router.jsx';
import App from './components/App.jsx';

import './css/style.css';

render(< Router />, document.getElementById('main'));