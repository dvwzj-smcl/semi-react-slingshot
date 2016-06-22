/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
//import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

import './styles/xenon/css/fonts/linecons/css/linecons.css';
import './styles/xenon/css/fonts/fontawesome/css/font-awesome.min.css';
import './styles/xenon/css/bootstrap.css';
import './styles/xenon/css/xenon-core.css';
import './styles/xenon/css/xenon-forms.css';
import './styles/xenon/css/xenon-components.css';
import './styles/xenon/css/xenon-skins.css';
import './styles/xenon/css/custom.css';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('app')
);
