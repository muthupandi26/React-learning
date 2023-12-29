import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor 1st");
  }

  componentDidMount() {
    console.log("parent component did mount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About page</h1>
        <User />
        <UserClass name={"first"} location={"srivilliputtur"} />
        <UserClass name={"second"} location={"srivilliputtur"} />
        <UserClass name={"third"} location={"srivilliputtur"} />
      </div>
    );
  }
}

// const About = () => {
// return (
//   <div>
//     <h1>About page</h1>
//     <User />
//     <UserClass name={"Muthu class"} location={"srivilliputtur"} />
//   </div>
// );
// };

export default About;
