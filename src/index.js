import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Router basename={'/'}>
    <Route path="/" component={App} />
        <App />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

in my index.js import React from 'react'; import ReactDOM from 'react-dom'; import './css/index.css'; import App from './App'; import * as serviceWorker from './serviceWorker'; import { BrowserRouter as Router, Route } from 'react-router-dom'; ReactDOM.render( <Router basename={' foobar '}> <Route path="/" component={App} /> </Router>, document.getElementById('root')); serviceWorker.unregister();