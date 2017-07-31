import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addUser } from "../actions/userActions"
import './addUser.css'

class AddUser extends Component {
    add = () => {
        let username = this.refs.username.value;
        if (!username) {
            alert('Username is required');
            return
        }
        this.props.addUser(username)
    };
    onEnter = (e) => {
        if (e.key === 'Enter') {
            this.add();
        }
    };
    render() {
        return (
            <div className="content__add-user">
                <input ref='username' maxLength={20} onKeyPress={this.onEnter} placeholder="Enter name"/>
                <input type="button" value="Add" onClick={this.add}/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addUser: bindActionCreators(addUser, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(AddUser);
