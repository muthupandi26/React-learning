import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
    console.log("construtor called");
  }

  async componentDidMount() {
    console.log("component did mount");
    const data = await fetch("https://api.github.com/users/muthupandij26");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component wil unmount");
  }

  render() {
    console.log("render is called");
    const { login, location } = this.state.userInfo;
    return (
      <div style={{ padding: "10px", border: "1px solid black" }}>
        <h2>Name: {login}</h2>
        <h3>Location: {location}</h3>
        <h4>contact us: @muthu </h4>
      </div>
    );
  }
}

export default UserClass;
