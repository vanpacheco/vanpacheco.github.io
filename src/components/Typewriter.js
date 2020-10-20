import React from "react";
import PropTypes from "prop-types";

import Cursor from "./Cursor";
import { promiseSerial } from "../utils";

class Typewriter extends React.PureComponent {
  state = {
    text: "",
    typing: true
  };

  async componentDidMount() {
    await this.main();
  }

  main = async () => {
    for (let child of this.props.children) {
      await this.typeText(child);

      this.setState({ typing: false });
      await this.delay(2500, (resolve) =>
        this.setState({ typing: true }, resolve)
      );

      await this.deleteText(child);

      this.setState({ typing: false });
      await this.delay(700, (resolve) =>
        this.setState({ typing: true }, resolve)
      );
    }
  };

  typeText = (text) => {
    return promiseSerial(
      text.split("").map((char) => () => this.delay(100, this.typeChar, char))
    );
  };

  typeChar = (callback, char) => {
    this.setState((prevState) => ({ text: prevState.text + char }), callback);
  };

  deleteText = (text) => {
    return promiseSerial(
      text.split("").map(() => () => this.delay(100, this.deleteLastChar))
    );
  };

  deleteLastChar = (callback) => {
    this.setState(
      (prevState) => ({ text: prevState.text.slice(0, -1) }),
      callback
    );
  };

  delay = (time, func, ...args) => {
    return new Promise((resolve) => {
      return setTimeout(func ? () => func(resolve, args) : resolve, time);
    });
  };

  render() {
    const { text, typing } = this.state;

    return (
      <div>
        <span className="code">{text}</span>
        <Cursor blinking={!typing} />
      </div>
    );
  }
}

Typewriter.propTypes = {
  children: PropTypes.array.isRequired
};

export default Typewriter;
