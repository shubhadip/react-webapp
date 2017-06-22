import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Headline = ({ title }) => {
  return <h1 className='title'>{title}</h1>;
};

const Greeting = ({ name, age }) => {
  return <h1 className='title'>Welcome {name} {age}</h1>;
};

export default class Foo extends Component {

  render() {
    return (
      <div>
        <Headline title='PropTypes' />
        <Greeting name='shubhadip' age={ 25 } />
      </div>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

Headline.propTypes = {
  title: PropTypes.string.isRequired,
};

