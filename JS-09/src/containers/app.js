import React, {Component} from 'react';
import './app.css'

class App extends Component {
    render() {
        return (
            <div id="app">
                <h3 className="app__header"><span className="header__title">Red</span>ux</h3>
                {this.props.children}
            </div>
        )
    }
}

export default App
