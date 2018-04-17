import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { fetching, user } = this.props.auth;
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Emaily</a>
          {!fetching && (
            <ul className="right">
              {!user ? (
                <li>
                  <a href="/auth/google">Login with Google</a>
                </li>
              ) : (
                <li>
                  <a>Logout</a>
                </li>
              )}
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
