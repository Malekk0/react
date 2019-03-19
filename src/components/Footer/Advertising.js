import React from "react";

const Advertising = ({ text, link }) => {
  return (
    <div
      style={{
        border: "2px double black",
        padding: 5,
        margin: 10
      }}
    >
      <img
        src={link}
        style={{
          display: "block",
          margin: "0 auto",
          width: 80,
          height: 80
        }}
      />
      <h3
        style={{
          padding: 1,
          margin: 1
        }}
      >
        <i>{text}</i>
      </h3>
    </div>
  );
};

export default Advertising;
