import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import history from './util/history';
import Header from './components/Header';
import DashBoard_enterprise from './components/GistComponent';

export default () => {
    return (
        <Router history={history}>
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/gist' component={DashBoard_enterprise} />
                </Switch>
            </div>
        </Router>
    )

}