import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { fetching, user } = this.props.auth;
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={user ? '/surveys' : '/'} className="left brand-logo">
            Emaily
          </Link>
          {!fetching && (
            <ul className="right">
              {!user ? (
                <li>
                  <a href="/auth/google">Login with Google</a>
                </li>
              ) : (
                <li>
                  <a href="/api/logout">Logout</a>
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
