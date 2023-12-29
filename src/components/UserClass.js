import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name + "children constructor is first");
  }

  componentDidMount() {
    console.log(this.props.name + "children component did mount");
  }

  render() {
    console.log(this.props.name + "children is render");
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="userCard">
        <h1>Count: {count}</h1>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increment count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>contact us: @muthu </h4>
      </div>
    );
  }
}

export default UserClass;
