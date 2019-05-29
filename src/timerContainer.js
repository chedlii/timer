import React from "react";
import Timer from "./timer";

class timerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      bool: false
    };
    setInterval(() => {
      if (this.state.bool) {
        this.setState({
          time: this.state.time + 1000
        });
      }
    }, 1000);
  }

  startStop = () => {
    this.setState({
      bool: !this.state.bool
    });
  };

  reset = () => {
    this.setState({
      time: 0
    });
  };

  render() {
    return (
      <div className="App">
        <Timer time={this.state.time} />

        <div class="btn">
          <button onClick={this.startStop}>
            {this.state.bool ? "stop" : "star"}{" "}
          </button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
export default timerContainer;
