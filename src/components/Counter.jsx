import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  state = { count: 0, imageUrl: "https://picsum.photos/200", tags: [] };
  /* renderTags(){
    if (this.state.tags.length===0)
    return <p> There are no tags </p>
    else
    return (
        <ul>
        {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
        </ul>
    )
  }*/
  handleChange=()=> {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>

        <button
          onClick={this.handleChange}
          className="btn btn-primary btn-sm"
        >
          Increment{" "}
        </button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
