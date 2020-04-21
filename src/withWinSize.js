import React, { Component } from "react";
import debounce from "lodash.debounce";
import throttle from "lodash.throttle";

function withWinSize(
  WrappedComponent,
  {
    widthOffset = 0,
    heightOffset = 0,
    updateMode = "throttle",
    delay = 500,
  } = {}
) {
  return class extends Component {
    constructor(props) {
      super(props);

      const updateFn = updateMode === "debounce" ? debounce : throttle;
      this.handleWindowResize = updateFn(
        this.handleWindowResize.bind(this),
        delay
      );

      this.state = {
        width: window.innerWidth + widthOffset,
        height: window.innerHeight + heightOffset,
      };
    }

    componentDidMount() {
      window.addEventListener("resize", this.handleWindowResize);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.handleWindowResize);
    }

    handleWindowResize() {
      this.setState({
        width: window.innerWidth + widthOffset,
        height: window.innerHeight + heightOffset,
      });
    }

    render() {
      return (
        <WrappedComponent
          winWidth={this.state.width}
          winHeight={this.state.height}
          {...this.props}
        />
      );
    }
  };
}

export default withWinSize;
