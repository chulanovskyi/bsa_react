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
        let name = this.refs.username.value;
        if (!name) {
            return alert('Username is required')
        }
        this.props.onAdd({
            username: name,
            userId: this.props.countId
        });
        this.refs.username.value = '';
        this.setState({
            username: ''
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