import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import background from "../../assets/images/back-1.png";
import Fade from 'react-reveal/Fade';
import { FaUserClock, FaUserFriends, FaBell, FaRegMoneyBillAlt, FaBullhorn, FaIgloo } from "react-icons/fa";

// Icons
import { AiOutlineDoubleRight } from "react-icons/ai";

class Home extends Component {

  render () {
    return (
    <div style={{backgroundImage: `url(${background})`, backgroundSize: '300px'}}>
    <Navbar className="p-3" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={require("../../assets/images/kool-logo.png")} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto align-middle">
            <Nav.Link href="#features">
              <Link className={ this.isPathActive('/') ? 'nav-link active' : 'nav-link' } to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link >
              <Link className={ this.isPathActive('/#about-us') ? 'nav-link active' : 'nav-link' } to="/#about-us">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={ this.isPathActive('/#overview') ? 'nav-link active' : 'nav-link' } to="/#overview">
                Overview
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={ this.isPathActive('/user-pages/login') ? 'nav-link active' : 'nav-link' } to="/user-pages/login">
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
                <Link className={ this.isPathActive('/user-pages/register') ? 'nav-link active' : 'nav-link' } to="/user-pages/register">
                  Register
                </Link>
              </Nav.Link>
            <Nav.Link>
              <button type="button" class="btn btn-primary">
                Schedule Demo
              </button>
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="pt-3 pb-5">
      <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <Fade left>
              <h6 className="font-weight-bold pt-5 pb-2">Kool Payroll</h6>
              <h1 className="text-info font-weight-bold pt-2 pb-2">Payroll Software with Automated Compliances</h1>
              <p className="pt-2 pb-2">
                Calculate payroll and disburse salaries in just a few clicks. Kool HRMS Payroll automates payments and filings of compliances like TDS, PF, ESI, PT, and more!
              </p>
              <Link to="/user-pages/register">
                <button type="button" class="btn btn-info">
                  Get Started
                </button>
              </Link>
              <div className="row pt-4">
                <div className="col-sm-1 col-md-1 col-lg-1 text-center pt-2">
                <img src={require("../../assets/images/gift-box.png")} style={{width:'30px'}} alt="gift box" />
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8">
                  <p>
                    <h6>Get 3 months of Pro Plan for free</h6>
                    valid till 31st December, hurry!
                  </p>
                </div>
              </div>
              </Fade>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 pt-5 text-center">
            <Fade right>
              <img src={require("../../assets/images/home.png")} style={{width:'100%'}} alt="logo" />
              </Fade>
            </div>
          </div>
      </div>
    </div>

    {/* About Us */}
    <section id="about-us">
    <div className="bg-white pt-5 pb-5">
      <Fade bottom>
        <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <Fade bottom>
                  <h3 className='text-info text-center pt-5 pb-2'>About Us</h3>
                </Fade>
                <Fade bottom>
                  <hr></hr>
                  <p className='text-center pt-3 pb-5 text-muted'>
                  HR and payroll management departments share a lot in common, and when these two systems do not talk to one another, you end up spending your time populating the same information in multiple systems. Zoho brings you the power of a compelling payroll management system and an equally powerful HR management solution to simplify the payroll process for your organisation.
                  </p>
                </Fade>
              </div>
            </div>
        </div>
      </Fade>
    </div>
    </section>
    <section id="overview">
    {/* Overview */}
    <div className="pt-5 pb-5">
      <Fade bottom>
        <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <Fade bottom>
                  <h3 className='text-info text-center pt-5 pb-4'>Overview</h3>
                </Fade>
                <hr></hr>
                <div className='row pt-2'>
                  <div className='col-sm-4 col-md-4 col-lg-4'>
                    <Fade left>
                      <div className="text-info border border-info rounded ml-5 mt-3 p-2 text-center">
                          <h1 class="pt-2 pb-3"><FaUserClock /> </h1>
                          Create unique roles for different teams
                      </div>
                    </Fade>
                    <Fade left>
                      <div className="text-info border border-info rounded mr-5 mt-3 p-2 text-center">
                          <h1 class="pt-2 pb-3"><FaRegMoneyBillAlt /> </h1>
                          Implement a payroll approval <br></br>process
                      </div>
                    </Fade>
                    <Fade left>
                      <div className="text-info border border-info rounded ml-5 mt-3 p-2 text-center">
                          <h1 class="pt-2 pb-3"><FaBell /> </h1>
                          Stay informed with timely notifications
                      </div>
                    </Fade>

                  </div>
                  <div className='col-sm-4 col-md-4 col-lg-4 pt-5 text-center'>
                    <img src={require("../../assets/images/hr.png")} style={{width:'60%'}} alt="logo" />
                  </div>
                  <div className='col-sm-4 col-md-4 col-lg-4'>
                    <Fade right>
                      <div className="text-info border border-info rounded mr-5 mt-3 p-2 text-center">
                          <h1 class="pt-2 pb-3"><FaUserFriends /> </h1>
                          Delegate payroll <br></br>responsibilities
                      </div>
                    </Fade>
                    <Fade right>
                      <div className="text-info border border-info rounded ml-5 mt-3 p-2 text-center">
                          <h1 class="pt-2 pb-3"><FaBullhorn /> </h1>
                          Send organizational <br></br>announcements
                      </div>
                    </Fade>
                    <Fade right>
                      <div className="text-info border border-info rounded mr-5 mt-3 p-2 text-center">
                          <h1 class="pt-2 pb-3"><FaIgloo /> </h1>
                          See it all in one <br></br>place
                      </div>
                    </Fade>
                  </div>
                </div>
                <hr></hr>
              </div>
            </div>
        </div>
      </Fade>
    </div>
    </section>

    <section id="evrything">
    {/* Overview */}
    <div className="bg-white pt-5 pb-5">
      <Fade bottom>
        <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <Fade bottom>
                  <h3 className='text-info text-center pt-5 pb-4'>Everything you need to run your payroll</h3>
                </Fade>
                <hr></hr>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <Fade left>
                  <div className="text-info border border-info rounded mr-5 mt-3 p-3 text-left">
                  <h4>Straightforward setup</h4>
                  <p className='text-muted'>Enter your organization details, tax information, employee details, salary components, and pay schedule to get your payroll up and running right away.</p>
                  </div>
                </Fade>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
              <Fade right>
                  <div className="text-info border border-info rounded mr-5 mt-3 p-3 text-left">
                  <h4>Multiple work locations</h4>
                  <p className='text-muted'>While you continue expand your business, we help you distribute the same perfect payslips across all your branches in different states.</p>
                  </div>
                </Fade>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
              <Fade left>
                  <div className="text-info border border-info rounded mr-5 mt-3 p-3 text-left">
                  <h4>Personalized salary components</h4>
                  <p className='text-muted'>Choose different allowances, earnings, reimbursements, and prerequisite for different employees. Easily enable or disable individual components, and Zoho Payroll will adjust to your settings and calculate the right pay.</p>
                  </div>
                </Fade>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
              <Fade right>
                  <div className="text-info border border-info rounded mr-5 mt-3 p-3 text-left">
                  <h4>Allowances that reflect your culture</h4>
                  <p className='text-muted'>Choose from the list of preset allowances or tailor allowance categories to support your employees while they support your business.</p>
                  </div>
                </Fade>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">
              <Fade left>
                  <div className="text-info border border-info rounded mr-5 mt-3 p-3 text-left">
                  <h4>Policies that set the tone for your organization</h4>
                  <p className='text-muted'>Define your organization's FBP, reimbursement claims, and submission rules for IT declarations and investment proofs. You can collect POIs in multiple phases and set the dates when the resulting tax adjustments will be reflected in your employees' pay.</p>
                  </div>
                </Fade>
              </div>
          </div>
        </div>
        </Fade>
      </div>
    </section>
    <section id="evrything">
    {/* Overview */}
    <div className="pt-5 pb-5">
      <Fade bottom>
        <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4">
                <Fade bottom>
                  <h3 className='text-info font-weight-bold text-left pt-5 pb-4'>Subscribe to our newsletter</h3>
                </Fade>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <Form.Group className="d-flex search-field pt-5 pb-4">
                <Form.Control type="email" placeholder="Email" size="lg" className="h-auto" />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4  pt-5 pb-4">
            <Link className="btn btn-block btn-info btn-lg font-weight-medium auth-form-btn" to="/">Subscribe</Link>
            </div>
          </div>
        </div>
        </Fade>
      </div>
    </section>

    {/* Footer */}
    <div className="bg-white pt-5">
      <Fade bottom>
      <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
                <img src={require("../../assets/images/kool-logo.png")} alt="logo" />
                <p className="text-justify pt-5">&nbsp;&nbsp;&nbsp;&nbsp;
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                </p>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
                {/* <h5><u>QUICK LINKS</u></h5> */}
                <ul>
                  <ol className='text-dark'>
                    <Link className={this.isPathActive('/') ? 'nav-link active text-dark' : 'nav-link text-dark' } to="/">
                      <AiOutlineDoubleRight /> Home
                    </Link>
                  </ol>
                  <ol>
                    <Link className={ this.isPathActive('/') ? 'nav-link active text-dark' : 'nav-link text-dark' } to="/">
                      <AiOutlineDoubleRight /> About Us
                    </Link>
                  </ol>
                  <ol>
                    <Link className={ this.isPathActive('/') ? 'nav-link active text-dark'  : 'nav-link text-dark' } to="/">
                      <AiOutlineDoubleRight /> Overview
                    </Link>
                  </ol>
                  <ol>
                    <Link className={ this.isPathActive('/') ? 'nav-link active text-dark' : 'nav-link text-dark' } to="/">
                      <AiOutlineDoubleRight /> Contact Us
                    </Link>
                  </ol>
                  <ol>
                    <Link className={ this.isPathActive('/') ? 'nav-link active text-dark' : 'nav-link text-dark' } to="/">
                      <AiOutlineDoubleRight /> Advertisement
                    </Link>
                  </ol>
                  <ol>
                    <Link className={ this.isPathActive('/') ? 'nav-link active text-dark' : 'nav-link text-dark' } to="/">
                      <AiOutlineDoubleRight /> Privacy Policy
                    </Link>
                  </ol>
                </ul>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
                {/* <h5><strong className='text-info'>SOLUTIONS</strong></h5> */}
                <ul>
                  <ol>
                    <Link className={ this.isPathActive('/') ? 'nav-link active text-dark' : 'nav-link text-dark' } to="/">
                      <AiOutlineDoubleRight /> Login
                    </Link>
                  </ol>
                  <ol>
                    <Link className={ this.isPathActive('/') ? 'nav-link active text-dark' : 'nav-link text-dark' } to="/">
                      <AiOutlineDoubleRight /> Register
                    </Link>
                  </ol>
                  <ol>
                    <Link className={ this.isPathActive('/') ? 'nav-link active text-dark' : 'nav-link text-dark' } to="/">
                      <AiOutlineDoubleRight /> Schedule Demo
                    </Link>
                  </ol>
                  <ol>
                    <Link className={ this.isPathActive('/') ? 'nav-link active text-dark' : 'nav-link text-dark' } to="/">
                      <AiOutlineDoubleRight /> Events
                    </Link>
                  </ol>
                  <ol>
                    <Link className={ this.isPathActive('/') ? 'nav-link active text-dark' : 'nav-link text-dark'  } to="/">
                      <AiOutlineDoubleRight /> Blogs
                    </Link>
                  </ol>
                  <ol>
                    <Link className={ this.isPathActive('/') ? 'nav-link active text-dark' : 'nav-link text-dark' } to="/">
                      <AiOutlineDoubleRight /> Careers
                    </Link>
                  </ol>
                </ul>
            </div>

          </div>
          <div className="text-center pt-2 pb-5">
              <hr></hr>
              Copyright © 2022. kool elegance sdn bhd. All Rights Reserved.
          </div>
      </div>
      </Fade>
    </div>
    </div>
  );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

}

export default Home