import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from '../../scss/header/header.scss';

class Header extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      return ([
        <li className='nav-item right'>
          <Link className='nav-link' to={'signout'} key={ 'signout' }>Sign Out</Link>
        </li>,
        <li>
          <Link className='nav-link' to={'about'} key={ 'about' }>About</Link>
        </li>,
        <li>
          <Link className='nav-link' to={'service'} key={ 'service' }>Service</Link>
        </li>,
        <li>
          <Link className='nav-link' to={'feature'} key={ 'feature' }>Feature</Link>
        </li>,
        <li>
          <Link className='nav-link' to={'Foo'} key={ 'foo' }>Foo</Link>
        </li>
      ]);
    } else {
      return ([
        <li className='nav-item' key={ 'signin' }>
          <Link className='nav-link' to={'/signin'} >Sign In</Link>
        </li>,
        <li className='nav-item' key={ 'signup' }>
          <Link className='nav-link' to={'/signup'} >Sign Up</Link>
        </li>,
      ]);
    }
  }

  render() {
    return (
      <div>
        <nav className='navbar navbar-default'>
          <div className='container'>
            <div className='navbar-header'>
              <NavLink className='navbar-brand' to='/'>Admin Panel</NavLink>
            </div>

            <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
              <ul className='nav navbar-nav'>
                <li className='active'><NavLink to='/'>Home <span className='sr-only'>
                (current)
                </span></NavLink></li>
                {this.renderLinks()}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}
export default connect(mapStateToProps)(Header);