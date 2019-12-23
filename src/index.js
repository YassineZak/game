import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Connexion from './components/Connexion';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FirebaseApp from './components/base';

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={(props) => <Connexion {...props} db={new FirebaseApp()} />}/>
            <Route exact path="/game" component={App} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
