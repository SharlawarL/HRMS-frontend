import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input'

export class LocationList extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Location Master</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Organization</a></li>
              <li className="breadcrumb-item active" aria-current="page">Location Master</li>
            </ol>
          </nav>
        </div>
        <div className="row">
        <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Location</label>
                    <Form.Control type="text" className="form-control" id="location" name="location" placeholder="Location" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail3">Address</label>
                    <Form.Control type="text" className="form-control" id="address" name="address" placeholder="Address" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputPassword4">Pincode</label>
                    <Form.Control type="text" className="form-control" id="pincode" name="pincode" placeholder="Pincode" />
                    </Form.Group>
                  <button type="submit" className="btn btn-gradient-primary mr-2">Submit</button>
                  <a href=""><button className="btn btn-light">Cancel</button></a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LocationList
