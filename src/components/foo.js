import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import _ from 'lodash';
import { getOrderStatuses } from '../actions/index';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    minWidth: '400px',
    transform: 'translate(-50%, -50%)',
  },
};

class Foo extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      selectedStatus: '',
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.props.getOrderStatuses();
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleChange = (event) => {
    this.setState({ selectedStatus: event.target.value });
    this.closeModal();
  }

  renderOptions() {
    return _.map(this.props.statuses, (status) => {
      return (
        <option key={ status } value={ status }>{status}</option>
      );
    });
  }

  render() {
    return (
      <div>
        {this.state.selectedStatus}
        <Button bsStyle='info' onClick={ this.openModal }>Open Modal</Button>
        <Modal
          isOpen={ this.state.modalIsOpen }
          onAfterOpen={ this.afterOpenModal }
          onRequestClose={ this.closeModal }
          style={ customStyles }
          contentLabel='Example Modal'
        >
          <h2 ref={ subtitle => this.subtitle = subtitle }>Hello</h2>
          <button onClick={ this.closeModal }>close</button>
          <div>I am a modal</div>
          <form className='form-group'>
            <label htmlFor='formControlsSelect' className='control-label'>Select</label>
            <select
              placeholder='select'
              id='formControlsSelect'
              className='form-control'
              value={ this.state.selectedStatus }
              onChange={ this.handleChange }
            >
              <option key='select status' value='select status'>Select Status</option>
              {this.renderOptions()}
            </select>
          </form>
        </Modal>
        <div>This is Sample</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    statuses: state.orders.statuses.status,
  };
}

export default connect(mapStateToProps, { getOrderStatuses })(Foo);
