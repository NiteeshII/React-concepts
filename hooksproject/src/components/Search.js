import React, { memo } from "react";

const Search = ({ onChange, ...rest }) => {
  return (
    <div>
      <input type="text" onChange={(e) => onChange(e.target.value)} {...rest} />
    </div>
  );
};

export default memo(Search);
