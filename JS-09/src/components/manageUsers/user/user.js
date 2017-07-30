import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteUser } from "../actions/userActions"
import './user.css'

class User extends Component {
    del = () => {
        this.props.deleteUser(this.props.user);
    };

    render() {
        return (
            <li className="user-list__user">
                {this.props.user.userId}. {this.props.user.username}
                <button onClick={this.del} value={this.props.user.userId}>Del</button>
            </li>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        deleteUser: bindActionCreators(deleteUser, dispatch)
    }
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
