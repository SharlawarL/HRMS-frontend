import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import background from "../../assets/images/back-1.png";
import Flip from 'react-reveal/Flip';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Redirect } from 'react-router-dom';
import UserService from './../services/UserService';
export class Login extends Component {

  constructor(props) {
    super(props)
    let loggedIn = false
    this.state = {
        username: '',
        password: '',
        loggedIn : localStorage.getItem('token') ? true : false,
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
  try {
    e.preventDefault()
    const { username, password } = this.state

    let params = { email: username, password: password }
    
    new UserService().authenticateUser(params)
    .then( result =>{
      let data = result.data
      if(data.success)
      {
        // Set Localstorage items
        let user = data.result
        localStorage.setItem("token", user[0]['_id'])
        localStorage.setItem("firstname", user[0]['firstname'])
        localStorage.setItem("lastname", user[0]['lastname'])
        localStorage.setItem("mobile", user[0]['mobile'])
        localStorage.setItem("email", user[0]['email'])
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

    
  } 
  catch(e){
    console.log(e)
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
                {/* <h5 className="text-center text-muted">Keep your HR workflows in perfect harmony</h5> */}
                <Flip left>
                  <img src={require('../../assets/images/login-2.gif')} style={{width:'50%'}} alt="logo" />
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
              <br></br>
              <br></br>
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3" onSubmit={this.submitForm} >
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="email" placeholder="Username" name="username" size="lg" className="h-auto" onChange={this.onChange} />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="password" placeholder="Password" name="password" size="lg" className="h-auto" onChange={this.onChange} />
                  </Form.Group>
                  <div className="mt-3">
                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/dashboard">SIGN IN</button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input"/>
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-black">Forgot password?</a>
                  </div>
                  <div className="mb-2">
                    <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                      <i className="mdi mdi-facebook mr-2"></i>Connect using facebook
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account? <Link to="/user-pages/register" className="text-primary">Create</Link>
                  </div>
                  <div className="text-center mt-2">Or</div>
                  <div className="text-center mt-2 font-weight-light">
                    Back to <Link to="/" className="text-primary">Homepage</Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
