import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './RequiresLogin';
import {fetchProtectedData} from '../actions/protected-data';
// import Contribute from './Contribute'
import NewPassageBox from './NewPassageBox'


export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div>
                <NewPassageBox />
            </div>
        );
    }
}

const mapStateToProps = state => {
    // const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
       
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));