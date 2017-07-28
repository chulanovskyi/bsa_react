import React, { Component } from 'react';
import AppContent from '../containers/appContent/appContent'
import AddUser from './addUser/addUser'
import UserList from './userList/userList'
import './manageUsers.css'

class ManageUsers extends Component {
    constructor() {
        super();
        this.state = {
            countId: 1,
            users: [],
        }
    }

    handleAddUser = (user) => {
        if (this.state.users.filter(u => u.username === user.username).length > 0){
            return alert('User already exists');
        }
        let users = [...this.state.users];
        users.push(user);
        this.setState({
            users: users,
            countId: ++this.state.countId
        });
    };

    handleDeleteUser = (user) => {
        let users = [...this.state.users];
        this.setState({
            users: users.filter(u => u.username !== user.props.user.username)
        });
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