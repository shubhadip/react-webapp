import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { signinUser } from '../../actions/index';
import _ from 'lodash';
import styles from '../../../scss/signin/signin.scss';

var FIELDS = {
  email: {
    type: 'input',
    label: 'Email',
    name:'email',
    type_property:'text'
  },
  password: {
    type: 'input',
    label: 'Password',
    name: 'password',
    type_property:'password'
  }
};

class Signin extends Component {

  handleFormSubmit({email, password}) {
    // Need to do something to log user in
    this.props.signinUser({ email, password });
  }

  renderTextField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ' '} `;

    return (
      <div className={ className }>
        <label htmlFor={ field.data.label }>{field.data.label}</label>
        <field.data.type
          type={field.data.type_property}
          className='form-control'
          { ...field.input }
        />

        {touched && error &&
        <span className='text text-danger'>{error}</span> }
      </div>
    );
  }

  renderFields(){
    return _.map(FIELDS,(field)=>{
      return (
          <Field data={field} name={field.name} key={field.name} component={ this.renderTextField }/>
        )
    });
  }

  renderError() {
    if (this.props.errorMessage){
      return <div className='alert alert-danger'>{this.props.errorMessage}</div>;
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className='container'>
        <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this))}>
          {this.renderFields()}
          {this.renderError()}
          <button type='submit' className='btn btn-sm btn-primary'>SignIn</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Enter ${field}`;
    }
  });
  
  return errors;
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
  };
}

export default reduxForm({
  validate,
  form: 'signin',
  fields: _.keys(FIELDS)
})(connect(mapStateToProps, { signinUser })(Signin));
