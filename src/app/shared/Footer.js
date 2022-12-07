import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="d-sm-flex justify-content-center   justify-content-sm-between py-2">
          <span className="float-none float-sm-center text-muted text-center text-sm-center d-block d-sm-inline-block">Copyright © <a href="https://koolelegance.com.my/" target="_blank" rel="noopener noreferrer">kool elegance sdn bhd </a>2022</span>
          {/* <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Free <a href="https://koolelegance.com.my/" target="_blank" rel="noopener noreferrer"> react admin </a> templates from BootstrapDash.com.  </span> */}
        </div>
      </footer> 
    );
  }
}

export default Footer;