import React, { Component } from "react";
import axios from "axios";
import { setErrors } from "./../conmmon/setErrors";



export default class CreateTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      errors: {},
    };
  };
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  validate = (title, description) => {
    const errors = setErrors(title, description);
    this.setState({ errors: errors });
    return Object.values(errors).every((err) => err === "");
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { title, description } = this.state;
    if (this.validate(title, description)) {
      const data = {
        title: title,
        description: description,
       
      };
      console.log(data);
      axios.post("http://localhost:5000/tables/add", data).then((res) => {
        if (res.data.success) {
          alert("Added");
          this.setState({ title: "", description: "" });
        }
      });
    }
  };

  render() {
    return (
      <div className="col-md-10 mt-3 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Create new table</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Enter title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
            {this.state.errors.title && (
              <div className="text-danger">{this.state.errors.title}</div>
            )}
          </div>

          
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
            {this.state.errors.description && (
              <div className="text-danger">{this.state.errors.description}</div>
            )}
          </div>

          <button
            className="btn btn-success"
            type="submit"
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>
            &nbsp;Submit
          </button>
        </form>
      </div>
    )
  };
};

//export default CreateTable;