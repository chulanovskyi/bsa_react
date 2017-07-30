import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions/userActions'
import AppContent from '../../containers/appContent/appContent'
import AddUser from './addUser/addUser'
import UserList from './userList/userList'
import FilterUser from './filterUser/filterUser'
import './manageUsers.css'

class ManageUsers extends Component {
    // handleAddUser = (user) => {
    //     if (this.state.users.filter(u => u.username === user.username).length > 0){
    //         return alert('User already exists');
    //     }
    //     let users = [...this.state.users];
    //     users.push(user);
    //     this.setState({
    //         users: users,
    //         ID: ++this.state.ID
    //     });
    // };

    // handleDeleteUser = (user) => {
    //     let users = [...this.state.users];
    //     this.setState({
    //         users: users.filter(u => u.username !== user.props.user.username)
    //     });
    // };
    //
    render() {
        let {countId, users, filterPattern} = this.props.stateFromReducer;
        return (
            <AppContent>
                <AddUser countId={countId}/>
                <FilterUser pattern={filterPattern}/>
                <UserList users={users}/>
            </AppContent>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}

const ManageUsersConnected = connect(mapStateToProps, mapDispatchToProps)(ManageUsers);

export default ManageUsersConnected