import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./RequiresLogin";
import { fetchProtectedData } from "../actions/protected-data";
// import Contribute from './Contribute'
import NewPassageBox from "./NewPassageBox";

export class Dashboard extends React.Component {
  componentDidMount() {
      console.log("Component mounted...Fetching Protected data")
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          Username: {this.props.username}
        </div>

        <NewPassageBox />

        <div className="dashboard-protected-data">
          Protected data: {this.props.protectedData}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: currentUser.username,

    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
