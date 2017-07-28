import React, { Component } from 'react';
import User from '../user/user'
import './userList.css'

class UserList extends Component {
    handleDel = (user) => {
        this.props.onUserDelete(user)
    };

    render() {
        return (
            <div className="content__user-list">
                <ul className="user-list__list">
                    {this.props.users.map((user) => {
                        return <User key={user.userId} onDel={this.handleDel} user={user}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default UserList