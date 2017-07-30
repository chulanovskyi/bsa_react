import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addUser } from "../actions/userActions"
import './addUser.css'

class AddUser extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: '',
    //         userId: this.props.ID,
    //     };
    // }
    // handleInput = () => {
    //     this.setState({
    //         username: this.refs.username.value
    //     });
    // };
    // handleAdd = () => {
    //     let name = this.refs.username.value;
    //     if (!name) {
    //         return alert('Username is required')
    //     }
    //     this.props.onAdd({
    //         username: name,
    //         userId: this.props.ID
    //     });
    //     this.refs.username.value = '';
    //     this.setState({
    //         username: ''
    //     });
    // };
    add = () => {
        let username = this.refs.username.value;
        this.props.addUser(username)
    };
    render() {
        return (
            <div className="content__add-user">
                <input ref='username' maxLength={20} onChange={this.handleInput} placeholder="Enter name"/>
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

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}

const AddUserConnected = connect(mapStateToProps, mapDispatchToProps)(AddUser);

export default AddUserConnected