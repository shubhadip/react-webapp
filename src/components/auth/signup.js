import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { signupUser } from '../../actions/index';
import _ from 'lodash';

class Signup extends Component {
  handleFormSubmit({email, password}) {
    this.props.signupUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  renderTextField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ' '} `;

    return (
      <div className={ className }>
        <label htmlFor={ field.label }>{field.label}</label>
        <input
          type='text'
          className='form-control'
          { ...field.input }
        />

        {touched && error &&
        <span className='text text-danger'>{field.meta.error}</span> }
      </div>
    );
  }

  renderPasswordField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ' '} `;

    return (
      <div className={ className }>
        <label htmlFor={ field.label }>{field.label}</label>
        <input
          type='password'
          className='form-control'
          { ...field.input }
        />

        {touched && error &&
        <span className='text text-danger'>{error}</span> }
      </div>
    );
  }

  // renderConfirmPasswordField(field) {
  //   const { meta: { touched, error } } = field;
  //   const className = `form-group ${touched && error ? 'has-danger' : ' '} `;

  //   return (
  //     <div className={ className }>
  //       <label htmlFor={ field.label }>{field.label}</label>
  //       <input
  //         type='password'
  //         className='form-control'
  //         { ...field.input }
  //       />

  //       {touched && error &&
  //       <span className='text text-danger'>{error}</span> }
  //     </div>
  //   );
  // }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className='container'>
        <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
          <Field
            name='email'
            label='Email'
            component={ this.renderTextField }
          />
          <Field
            name='password'
            label='Password'
            component={ this.renderPasswordField }
          />
          <Field
            name='confirm_password'
            label='ConfirmPassword'
            component={ this.renderPasswordField }
          />
          {this.renderAlert()}
          <button type='submit' className='btn btn-sm btn-primary'>SignIn</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Enter Email ';
  }
  if (!values.password) {
    errors.password = 'Enter password ';
  }
  if (!values.confirm_password) {
    errors.confirm_password = 'Please Confirm Password';
  }

  if (values.confirm_password && values.confirm_password != values.password) {
    errors.confirm_password = 'password Did Not Match ';
  }
  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  validate,
  form: 'signup',
})(connect(mapStateToProps, { signupUser })(Signup));
