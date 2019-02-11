import React from "react";
import "./index.css";

class Consumption extends React.PureComponent {


  handleSubmit = e => {
    e.preventDefault();
    this.props.generateCost(this.inputText.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter your consumption"
            ref={node => (this.inputText = node)}
          />
          <button type="submit">Calculate Annual Cost</button>
        </form>
      </div>
    );
  }
}

export default Consumption;
