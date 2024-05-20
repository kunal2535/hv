import React from "react";

const Theme = () => {
  const color = true;
  return (
    <div>
      <p
        className={`container ${color ? 'color-present-hai' :  "missing-color"} `}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
        consequuntur.
      </p>
    </div>
  );
};

export default Theme;
