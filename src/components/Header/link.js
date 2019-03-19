import React from "react";

const Link = ({ name, href }) => {
  return (
    <div style={{ marginRight: 20 }}>
      <h1>
        <a href={href}>{name}</a>
      </h1>
    </div>
  );
};

export default Link;
