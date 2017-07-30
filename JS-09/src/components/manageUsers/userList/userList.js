import React, { Component } from 'react';
import { connect } from 'react-redux'
import User from '../user/user'
import './userList.css'

class UserList extends Component {
    render() {
        return (
            <div className="content__user-list">
                <ul className="user-list__list">
                    {this.props.users.map((user) => {
                        if (user.show){
                            return <User key={user.userId} user={user}/>
                        }
                        return null;
                    })}
                </ul>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

export default connect(mapStateToProps)(UserList);
