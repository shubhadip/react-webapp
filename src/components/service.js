import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { toastr } from 'react-redux-toastr';
import { connect } from 'react-redux';
import ProductTag from './dummy_components/product_tag';
import { getBarcodeDetails } from '../actions/barcode_actions';

class Service extends Component {

  handleFormSubmit = ({barcode}) => {
    if (barcode) {
      const id = 1234;
      this.props.getBarcodeDetails({ id }, (error,response) => {
        this.props.reset();
        this.print();
      });
    }else{
      toastr.warning('Enter Barcode details ...');
    }
  }

  print() {
    const printContents = document.getElementById('barcodeprint');
    if(printContents){
      const contentData = printContents.innerHTML;
      const popupWin = window.open('', '_blank', 'width=600,height=600');
      popupWin.document.open();
      popupWin.document.write(
        `<html>
        <head>
        </head><body style='height:100px;' onload='window.print()'> ${contentData} </body>
        </html>`);
      popupWin.document.close();
      setTimeout(() => {
        popupWin.close();
      }, 500);
    }
  }

  renderTag() {
    if (this.props.barcodeData) {
      return (
        <ProductTag data={ this.props.barcodeData } />
      );
    } else {
      return <div />;
    }
  }

  renderField(field) {
    return (
      <div className='form-group col-sm-4'>
        <label htmlFor='barcode'>Barcode</label>
        <input type='text'
          className='form-control'
          autoFocus
          { ...field.input }
          placeholder='Scan barcode ...'
        />
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className='col-md-12'>
        <div className='col-md-12'>
          <form name='barcodeScan' onSubmit={ handleSubmit(this.handleFormSubmit) }>
            <Field name='barcode' component={this.renderField}/>
          </form>
        </div>
        <div className='col-md-12' style={ { display: 'none'} }>
          { this.renderTag() }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    barcodeData: state.admin.barcode,
  };
}

export default reduxForm({
  form: 'barcodeScan',
})(connect(mapStateToProps, { getBarcodeDetails })(Service));

