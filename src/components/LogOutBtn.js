import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class LogOutBtn extends Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="logout-btn"onClick={() => this.logOut()}>Log Out</button>
            );
        }
        return (
            <div >
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LogOutBtn);
