import React from 'react';
import PropTypes from 'prop-types';

import { promiseSerial } from '../../utils';

class Typewriter extends React.PureComponent {
  state = {
    text: ''
  };

  componentDidMount() {
    this.typeText();
  }

  typeText = () => {
    const { children } = this.props;

    for (let child of children) {
      promiseSerial(
        child
          .split('')
          .map(char => () => this.generateDelay(char, this.addCharToText))
      ).then(() => {
        // this.deleteText();
      });
    }
  };

  deleteText = () => {
    const { text } = this.state;
    promiseSerial(
      text
        .split('')
        .map(() => () => this.generateDelay(null, this.deleteLastCharFromText))
    ).then(() => {
      // this.typeText();
    });
  };

  generateDelay = (char, func) => {
    return new Promise(resolve => {
      setTimeout(() => func(char, resolve), 50);
    });
  };

  addCharToText = (char, callback) => {
    this.setState(prevState => ({ text: prevState.text + char }), callback);
  };

  deleteLastCharFromText = (_, callback) => {
    this.setState(
      prevState => ({ text: prevState.text.slice(0, -1) }),
      callback
    );
  };

  render() {
    const { text } = this.state;

    return <div>{text}</div>;
  }
}

Typewriter.propTypes = {
  children: PropTypes.array.isRequired
};

export default Typewriter;
