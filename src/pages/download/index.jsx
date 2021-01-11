import React, { Component } from "react";

class Download extends Component {
  componentWillMount() {
    console.log(2222, this.props.location);
  }
  render() {
    return <div>Download</div>;
  }
}
export default Download;
