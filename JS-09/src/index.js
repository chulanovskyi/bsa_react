import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './containers/app'
import ManageUsers from './components/manageUsers/manageUsers'
import userReducer from './components/manageUsers/reducers/userReducer'

let store = createStore(userReducer);

// fix from https://github.com/reactjs/react-router-redux/issues/179
let routes = (
    <Route path="/" component={App}>
        <IndexRoute component={ManageUsers}/>
    </Route>
);

let render = () => {
    ReactDOM.render(
        (
            <Provider store={store}>
                <Router history={browserHistory} routes={routes}>
                </Router>
            </Provider>
        )
        , document.getElementById('root')
    );
};

store.subscribe(render);
render();