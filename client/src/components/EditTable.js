import React, { Component } from "react";
import Axios from "axios";
import { setErrors } from "./../conmmon/setErrors";


class EditTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      errors: {},
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get(`http://localhost:5000/tables/update/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          title: res.data.table.title,
          description: res.data.table.description

        });
      }
    });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  validate = (titlte, description) => {
    const errors = setErrors(titlte, description);
    this.setState({ errors: errors });
    return Object.values(errors).every((err) => err === "");
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { title, description } = this.state;
    if (this.validate(title, description)) {
      const data = {
        title: title,
        description: description
       
      };
      console.log(data);
      Axios.put(`http://localhost:5000/tables/update/${id}`, data).then((res) => {
        if (res.data.success) {
          alert("Edited successfully");
        }
      });
    }
  };

  render() {
    return (
      <div className="col-md-10 mt-3 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Edit table</h1>
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
    );
  }
}

export default EditTable