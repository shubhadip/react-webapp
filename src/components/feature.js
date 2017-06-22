import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import { getFromCookie } from '../credentials/access_credentials';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  handleClickEdit(values){
    this.props.updateAdminStatus({ id: values.id, status: values.enable });
  }

  handleClickHighlight(values){
    this.props.highlightAdminStatus({ id: values.id, status: values.enable });
  }

  renderList() {
    return _.map(this.props.admin_users, (admin_user) => {
      return (
        <tr key={ admin_user.email } style={ admin_user.enable ? {} : { backgroundColor: 'lightgrey' } }>
          <td>{admin_user.id}</td>
          <td>{admin_user.first_name}</td>
          <td>{admin_user.last_name}</td>
          <td>{admin_user.email}</td>
          <td>{admin_user.designation}</td>
          <td>{admin_user.department}</td>
          <td>{admin_user.enable ? 'Enabled' : 'Disabled'}</td>
          <td>
            <button
              className='btn btn-info'
              onClick={ () => { this.handleClickEdit(admin_user); } }
            >
            Remove
            </button>
          </td>
          <td>
            <button
              className='btn btn-warning'
              onClick={ () => { this.handleClickHighlight(admin_user); } }
            >
              Highlight</button></td>
        </tr>
      );
    });
  }
  render() {
    const user = getFromCookie('name');
    const hello_msg = `Hi, ${user}`;
    return (
      <div>
        <div className='text-success' style={{'marginTop':'10px','marginBottom':'12px','fontSize':'30px'}}>{hello_msg}</div>
        <div className="admin-list table-responsive">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Status</th>
                <th>Remove</th>
                <th>Hightlight</th>
              </tr>
            </thead>
            <tbody>
                {this.renderList()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    admin_users: state.admin.all,
  };
}
export default connect(mapStateToProps, actions)(Feature);
