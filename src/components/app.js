import React, { Component } from 'react';
import Welcome from './welcome';
// import styles from '../../scss/app/app.scss';

export default class App extends Component {
/* {this.props.children} Not Required AnyMore */
// className={styles.app}
  render() {
    return (
      <div>
        <Welcome />
      </div>
    );
  }
}