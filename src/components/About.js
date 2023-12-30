import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About page</h1>
        <UserClass name={"first"} location={"srivilliputtur"} />
      </div>
    );
  }
}

export default About;
