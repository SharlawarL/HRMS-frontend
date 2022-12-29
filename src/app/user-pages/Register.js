import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import background from "../../assets/images/back-1.png";
import Flip from 'react-reveal/Flip';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Redirect } from 'react-router-dom';
export class Register extends Component {
  constructor(props) {
    super(props)
    let loggedIn = false
    this.state = {
        firstname: '',
        lastname:'',
        mobile:'',
        country: '',
        email:'',
        password: '',
        loggedIn: loggedIn,
    }
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
    // this.responseGoogle = this.responseGoogle.bind(this)
  }

  onChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  submitForm(e) {
    e.preventDefault()
    const { firstname, lastname, mobile, terms, country, email, password } = this.state
    let params = {
        firstname : firstname,
        lastname : lastname,
        mobile : mobile,
        country : country,
        email : email,
        password : password
    }
    if(terms)
    {
      let headers = {
        headers: { 'Access-Control-Allow-Origin':'*' },
    }
    axios.post(process.env.REACT_APP_API_DEV + 'user/save-user', params, headers)
    .then( result =>{
      let data = result.data
      console.log("result ", result)
      console.log("data ", data)
      if(data.success)
      {
        NotificationManager.success(data.message, 'Authentication');
        setTimeout(() => {
          this.setState({
              loggedIn: true,
          });  
        }, 1000);
      } else {
        this.setState({
            loggedIn: false,
        });
        NotificationManager.error(data.message, 'Authentication');
        console.log("Login Failed")
      }
    })
    .catch(err =>{
      NotificationManager.error('Samething went wrong', 'Error');
    })
    } else {
      NotificationManager.error('Please select Terms and Conditions', 'Error');
    }
    
  }
  render() {
    if (this.state.loggedIn) {
      return <Redirect to='/dashboard'></Redirect>
    }
    
    return (
      <div style={{backgroundImage: `url(${background})`, backgroundSize: '300px'}}>
        <NotificationContainer/>
        <div className="d-flex align-items-right auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-7 align-bottom mx-0 p-5 col-md-push-5">
              <Link to="/">
                <img src={require("../../assets/images/kool-logo.png")} alt="logo" />
              </Link>
              <div className="text-center align-bottom">
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
                <h4>New here?</h4>
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <form className="pt-3" onSubmit={this.submitForm}>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="firstname" name="firstname" placeholder="Firstname" onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="lastname" name="lastname" placeholder="Lastname" onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="mobile" name="mobile" placeholder="Mobile" onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="Email" onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <select className="form-control form-control-lg" id="country" name="country" onChange={this.onChange}>
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
                    <input type="password" className="form-control form-control-lg" id="password" name="password" placeholder="Password" onChange={this.onChange} />
                  </div>
                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" name="terms" id="terms" onChange={this.onChange} />
                        <i className="input-helper"></i>
                        I agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button type='submit' className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >SIGN UP</button>
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
