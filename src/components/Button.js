import React from "react";

const Button = (props) => {
  const { children, onClick, style, ...rest } = props;

  return (
    <button {...rest} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
