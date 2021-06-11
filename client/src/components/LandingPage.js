import React, { Component } from "react";
import axios from "axios";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: [],
    };
  }
  

  getTables() {
    axios.get("http://localhost:5000/tables").then((res) => {
      if (res.data.success) {
        this.setState({
          tables: res.data.tables,
        });
        console.log("table: ", this.state.tables);
      }
    });
  }
  componentDidMount() {
    this.getTables();
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:5000/tables/delete/${id}`).then((res) => {
      alert(res.data.title + " has been deleted successfully");
      this.getTables();
    });
  };

  filterContent(tables, searchTerm) {
    const result = tables.filter(
      (table) =>
        table.title.toLowerCase().includes(searchTerm) ||
        table.description.toLowerCase().includes(searchTerm) 
    );
    this.setState({ tables: result });
  }

  handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    axios.get("/tables").then((res) => {
      if (res.data.success) {
        this.filterContent(res.data.tables, searchTerm);
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>All tables</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchTerm"
              onChange={this.handleTextSearch}
            ></input>
          </div>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tables.map((table, index) => (
              <tr>
                <th scope="row">{index}</th>

                <td>
                  <a href={`/tables/detail/${table._id}`}>{table.title}</a>
                </td>
                <td dangerouslySetInnerHTML={{ __html: table.description }}></td>
                <td>
                  <a className="btn btn-warning" href={`/edit/${table._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    
                    onClick={() => this.onDelete(table._id)}
                    href="#"
                  >
                    <i class="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="/add" className="btn btn-success">
          Add New table
        </a>
      </div>
    );
  }
}

export default LandingPage;