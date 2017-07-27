import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import AppContent from '../containers/appContent/appContent'
import AddUser from './addUser/addUser'
import UserList from './userList/userList'
import './manageUsers.css'

class ManageUsers extends Component {
    constructor() {
        super();
        this.state = {
            countId: 0,
            users: [],
        }
    }

    handleAddUser = (user) => {
        if (this.state.users.filter(u => u.username === user.username).length > 0){
            return alert('User already exists');
        }
        let users = [...this.state.users];
        users.push(user);
        this.setState({users: users});
        this.setState({countId: ++this.state.countId});
    };

    handleDeleteUser = (user) => {
        let toDeleteUser = ReactDOM.findDOMNode(user.userFromList.user);
        ReactDOM.unmountComponentAtNode(toDeleteUser);

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
            <AppContent>
                <AddUser countId={this.state.countId} onAdd={this.handleAddUser}/>
                <UserList users={this.state.users} onUserDelete={this.handleDeleteUser}/>
            </AppContent>
        )
    }
}

export default ManageUsers