import React, { Component } from 'react';
import ProductTag from './dummy_components/product_tag';

const DATA = {
  product_name: 'Tu 13 dekh',
  category_name: 'Men T-shirt',
  color: 'yellow 01',
  size: 'M',
  price: 425,
  barcode: 'B11112345',
};

class Service extends Component {
  componentDidMount() {
    print();
  }
  
  print() {
    const printContents = document.getElementById('barcodeprint').innerHTML;
    const popupWin = window.open('', '_blank', 'width=600,height=600');
    popupWin.document.open();
    popupWin.document.write(
      `<html>
      <head>
      </head><body style='height:100px;' onload='window.print()'> ${printContents} </body>
      </html>`);
    popupWin.document.close();
  }

  render() {
    return (
      <div className='text-info' >
        <ProductTag data={ DATA } />
      </div>
    );
  }
}

export default Service;
