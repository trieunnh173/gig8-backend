import React, { Component } from 'react';
import { connect } from "react-redux";
import { LOGIN_USER } from '../../actions/user.actions';

class Home extends Component {
  componentDidMount() {
    const { login } = this.props;
    login({ userName: 'hung' });
  }

  render() {
    const { usersState } = this.props;
    return (
      <section className="page-section">
        <div>
          Day la Home
            </div>
      </section>
    )
  }
}
const mapStateToProps = state => {
  return {
    usersState: state.usersState
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login: (user) =>
      dispatch({
        type: LOGIN_USER,
        user
      }),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);