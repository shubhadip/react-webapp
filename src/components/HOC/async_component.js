import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (getComponent) {

  class AsyncComponent extends React.Component {

    static Component = null;
    
    state = { Component: AsyncComponent.Component };
    
    static contextTypes = {
      router: PropTypes.object
    };

    componentWillMount() {
      if ( this.props.authenticated) {
        if(!this.state.Component){
          getComponent().then(Component => {
            AsyncComponent.Component = Component
            this.setState({ Component })
          });
        }
      }else{
        this.context.router.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.history.push('/');
      }
    }

    render() {

      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }

  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(AsyncComponent);
}