import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './containers/app'
import ManageUsers from './components/manageUsers/manageUsers'

ReactDOM.render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ManageUsers}/>
            </Route>
        </Router>
    )
    , document.getElementById('root')
);
