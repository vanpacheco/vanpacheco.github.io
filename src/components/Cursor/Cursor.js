import React from 'react';
import PropTypes from 'prop-types';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';

const blink = keyframes`
  from, to {
    color: transparent;
  }

  50% {
    color: #F24155;
  }
`;

const Cursor = ({ blinking }) => {
  return (
    <span
      css={css({
        fontWeight: 100,
        fontSize: '24px',
        color: '#F24155',
        animation: blinking ? `1s ${blink} step-end infinite` : 'none'
      })}
    >
      |
    </span>
  );
};

Cursor.propTypes = {
  blinking: PropTypes.bool
};

Cursor.defaultProps = {
  blinking: false
};

export default Cursor;
