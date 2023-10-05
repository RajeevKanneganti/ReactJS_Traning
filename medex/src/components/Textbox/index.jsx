import { useState } from "react";

export const Textbox = (props) => {
  //const [data,setData]=useState('');
  const textboxConfig = props.textboxConfig;
  const handleChange = props.handleChange;
  return (
    <div className="col-md-3">
      <input
        type={textboxConfig.type}
        className="from-control"
        name={textboxConfig.name}
        onChange={(e) => {
          handleChange(e.target.name, e.target.value);
        }}
        placeholder={textboxConfig.placeholder}
      />
    </div>
  );
};
