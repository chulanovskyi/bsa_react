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

export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers);
