import React, { Component } from 'react';
import './user.css'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
    }
    handleDel = (e) => {
        console.log(e.target.value);
        this.props.onDel({
            user: this
        })
    };

    render() {
        return (
            <li className="user-list__user">
                {this.state.user.userId}. {this.state.user.username}
                <button onClick={this.handleDel} value={this.state.user.username}>Del</button>
            </li>
        )
    }
}

export default User