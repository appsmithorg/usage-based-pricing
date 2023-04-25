import React from "react";
const DropDown = ({ title, children, states = false, className }) => {
  const [state, setState] = React.useState(states);
  return (
    <div className="mb-4">
      <div
        onClick={() => setState(!state)}
        className={`d-flex gap-3 text-xl ${className ? className : ``}`}
      >
        <h5>➤</h5>
        <h5>{title}</h5>
      </div>

      {state && <div className="mt-3">{children}</div>}
    </div>
  );
};

export default DropDown;
