import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import Register from './Register';

export function RegisterPage(props) {
    console.log(props)
    if (props.loggedIn) {
        
        console.log("We are logged in")
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="home">
            <h2>Register for Community Story</h2>
            <Register />
            <Link to="/">Login</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegisterPage);