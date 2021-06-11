import React, { Component } from "react";
import axios from "axios";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: {},
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:5000/tables/detail/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          table: res.data.table,
        });
        console.log("table: ", this.state.table);
      }
    });
  }
  render() {
    const { title, description } = this.state.table;
    return (
      <div>
        <h4>{title}</h4>
        <hr />
        <dl className="row">
          

          <dt className="col-sm-2">Description</dt>
          <dd className="col-sm-10">
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </dd>
        </dl>
      </div>
    );
  }
}

export default DetailPage;