import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Connexion from './components/Connexion';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FirebaseApp from './components/base';


export default class Root extends Component{

state = {
    username: null
}

sendUsername = (username) => {
    this.setState({ username })
}

render(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={(props) => <Connexion {...props} db={new FirebaseApp()} username={this.sendUsername} />}/>
                <Route exact path="/game" render={(props) => <App {...props} username={this.state.username}></App>} />
            </Switch>
        </BrowserRouter>
        )
    }
}
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
