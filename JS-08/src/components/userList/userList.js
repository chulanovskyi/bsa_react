import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import User from '../user/user'
import './userList.css'

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: props.users
        }
    }

    handleDel = (e) => {
        console.log(`In UserList: ${e}`);
        let toDeleteUser = ReactDOM.findDOMNode(e.user);
        ReactDOM.unmountComponentAtNode(toDeleteUser);
        this.props.onUserDelete({
            user: e
        })
        // let users = [...this.props.users];
        // this.setState({
        //     users: users.filter(user => user.userId.toString() !== e.target.value)
        // // });
        // this.props.onDel({
        //     users: this.state.users
        // })
    };

    render() {
        return (
            <div className="content__user-list">
                <ul className="user-list__list">
                    {this.props.users.map((user) => {
                        return <User key={user.username} onDel={this.handleDel} user={user}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default UserList