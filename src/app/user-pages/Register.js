import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import background from "../../assets/images/back-1.png";
import Reveal from 'react-reveal/Reveal';
import Flip from 'react-reveal/Flip';

export class Register extends Component {
  render() {
    return (
      <div style={{backgroundImage: `url(${background})`, backgroundSize: '300px'}}>
        <div className="d-flex align-items-right auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-7 align-bottom mx-0 p-5 col-md-push-5">
              <Link to="/">
                <img src={require("../../assets/images/kool-logo.png")} alt="logo" />
              </Link>
              <div className="text-center align-bottom">
                {/* <h5 className="text-center text-muted">Keep your HR workflows in perfect harmony</h5> */}
                <Flip left>
                  <img src={require('../../assets/images/register-logo.png')} style={{width:'70%'}} alt="logo" />
                </Flip>
              </div>
              <h5 className="text-right text-muted">Powered By</h5>
              <div className="text-right">
                <Link to="/">
                  <img src={require("../../assets/images/kool-elegance.png")} alt="logo" style={{width: '200px', height: '100px'}}/>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 bg-white col-md-push-7 p-2 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                {/* <div className="brand-logo">
                  <img src={require("../../assets/images/kool-logo.png")} alt="logo" />
                </div> */}
                <h4>New here?</h4>
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <form className="pt-3">
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <select className="form-control form-control-lg" id="exampleFormControlSelect2">
                      <option>Country</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="India">India</option>
                      <option value="United States of America">United States of America</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Germany">Germany</option>
                      <option value="Argentina">Argentina</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        I agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/dashboard">SIGN UP</Link>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account? <Link to="/user-pages/login" className="text-primary">Login</Link>
                  </div>
                  <div className="text-center mt-2">Or</div>
                  <div className="text-center mt-2 font-weight-light">
                    Back to <Link to="/" className="text-primary">Homepage</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
