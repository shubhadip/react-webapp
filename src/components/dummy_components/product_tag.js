import React from 'react';
import PropTypes from 'prop-types';
import Barcode from 'react-barcode';
import dateFormat from 'dateformat';

const now = new Date();
const rest = dateFormat(now, "dd-mm-yyyy H:m:s");
console.log(rest);

const ProductTag = ({ data }) => {
  return (
    <div>
      <div id='barcodeprint' style={ { border: '1px solid' } }>
        <div id='barcode_internal_div' style={ { fontFamily: 'arial', display: 'block', width: '240px', height: 'auto', overflow: 'hidden', padding: '4px 0px 0px 22px', margin: '0 0 0 0px' } }>
          <span style={ { fontFamily: 'arial', fontWeight: 'bold', textAlign: 'left', fontSize: '17px', width: '100%' } }>Bewakoof Lifestyle</span>
        </div>
        <div id='first_row' style={ { display: 'block', fontSize: '13px', width: '100%' } }>
          <div>{ data.product_name }</div>
        </div>
        <div id='second_row' style={ { display: 'block', fontSize: '13px', marginTop: '1px', width: '100%' } }>
          <div style={ { fontFamily: 'arial', fontSize: '13px', display: 'block' } }>{ data.category_name }</div>
        </div>
        <div id='third_row' style={ { display: 'inline-block', fontSize: '13px', marginTop: '1px', width: '100%' } }>
          <div style={ { display: 'block', fontSize: '13px', float: 'left' } }>
            <span style={ { fontFamily: 'arial' } }>M.R.P.:Rs. </span>
            <span style={ { fontFamily: 'arial', fontWeight: 'bold', fontSize: '15px' } }>{ data.price }
              <span style={ { fontSize: '7px', fontFamily: 'arial', fontWeight: '600' } }>(Incl. of all taxes)</span>
            </span>
          </div>
          <div>
            <span style={ { fontFamily: 'arial', marginFeft: '1px', fontSize: '11px' } }>&nbsp;PKD.:</span>
            <span style={ { fontFamily: 'arial', fontWeight: 'bold', fontSize: '10px' } }>{rest}</span>
          </div>
        </div>
        <div id='fourth_row' style={ { display: 'block', fontSize: '13px', width: '100%', marginTop: '1px' } }>
          <div style={ { display: 'block', fontSize: '13px' } }>
            <span style={ { fontFamily: 'arial' } }>Size : </span>
            <span style={ { fontFamily: 'arial', fontWeight: 'bold', fontSize: '15px' } } >{ data.size }</span>
          </div>
        </div>
        <div id='fifth_row' style={ { display: 'block', fontSize: '13px', width: '100%', marginTop: '1px' } }>
          <div style={ { display: 'inline-block', fontSize: '12px' } }>
            <span style={ { fontFamily: 'arial', display: 'inline-block' } }>Color : </span>
            <span style={ { fontFamily: 'arial', fontWeight: 'bold', fontSize: '13px', display: 'inline-block' } } >{ data.color }</span>
          </div>
          <div style={ { fontSize: '13px', marginLeft: '10px', display: 'inline-block' } } >
            <span style={ { fontFamily: 'arial', display: 'inline-block' } }>Qty : </span>
            <span style={ { fontFamily: 'arial', fontWeight: 'bold', fontSize: '13px', display: 'inline-block' } }>1N</span>
          </div>
        </div>
        <span style={ { fontSize: '13px', fontFamily: 'arial', fontWeight: 'bold', textAlign: 'left', width: '100%', marginTop: '3px' } }>MFG By :Bewakoof Brands Pvt. Ltd.</span>
        <p style={ { margin: '0 0 2px 0', fontFamily: 'arial', fontSize: '10px', wordWrap: 'break-word' } }>
          Shed No.1, A wing, Swarajya Complex,
          <br />Rajlaxmi Compound, Kalher Village,
          <br />Taluka : Bhiwandi, Dist: Thane-421302
          <br /> E-mail:care@bewakoof.com
        </p>
        <div style={ { display: 'block', width: '100%', marginLeft: '5px', letterSpacing: '0.1em' } }>
          <Barcode value={ data.barcode } height={ 49 } />,
        </div>
      </div>
    </div>
  );
};


ProductTag.defaultProps = {
  data: PropTypes.object,
};

ProductTag.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProductTag;
