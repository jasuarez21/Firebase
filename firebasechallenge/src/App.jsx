/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { login, logout } from './redux/actions/actionCreators';
import './App.css';

function App({ dispatch, user }) {
  return (
    <nav>
      {
      user.isLoggedIn
        ? (
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        )
        : (
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => dispatch(login())}
          >
            Login
          </button>
        )

    }

    </nav>
  );
}
function mapStateToProps({ user }) {
  return {
    user
  };
}
export default connect(mapStateToProps)(App);
