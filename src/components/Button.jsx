import React from "react";

const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button type={type} onClick={onClick} style={{ padding: "10px 20px" }}>
      {children}
    </button>
  );
};

export default Button;
