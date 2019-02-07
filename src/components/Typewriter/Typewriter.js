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
        child.split('').map(char => () => this.generateDelay(char))
      );
    }
  };

  generateDelay = char => {
    return new Promise(resolve => {
      setTimeout(
        () =>
          this.setState(
            prevState => ({ text: prevState.text + char }),
            resolve
          ),
        50
      );
    });
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
