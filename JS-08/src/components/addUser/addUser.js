import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './addUser.css'

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userId: this.props.countId,
        };
    }
    handleInput = () => {
        this.setState({
            username: this.refs.username.value
        });
    };
    handleAdd = () => {
        this.props.onAdd({
            username: this.state.username,
            userId: this.props.countId
        });
    };
    render() {
        return (
            <div className="content__add-user">
                <input ref='username' type="text" maxLength={20} onChange={this.handleInput}/>
                <input type="button" value="Add" onClick={this.handleAdd}/>
            </div>
        )
    }
}

AddUser.propTypes = {
    username: PropTypes.string,
    userId: PropTypes.number
};

export default AddUser