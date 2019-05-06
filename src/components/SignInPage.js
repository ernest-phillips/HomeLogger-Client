import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import SignInForm from './SignIn-Form';

export function SignInPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">            
            <SignInForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignInPage);
