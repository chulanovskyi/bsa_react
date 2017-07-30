import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { filterUser } from "../actions/userActions"
import './filterUser.css'

class FilterUser extends Component {
    onFilter = () => {
        this.props.filterUser(this.refs.filter.value);
    };
    render() {
        return (
            <div className="content__filter">
                <input ref="filter" className="filter__input" maxLength={20} placeholder="Search user"
                onChange={this.onFilter}/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        filterUser: bindActionCreators(filterUser, dispatch)
    }
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterUser)
