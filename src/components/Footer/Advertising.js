import React from "react";

const Advertising = ({ text, link }) => {
  return (
    <div
      style={{
        padding: 5,
        margin: 10
      }}
    >
      <img
        src={link}
        style={{
          width: 150,
          height: 100
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
