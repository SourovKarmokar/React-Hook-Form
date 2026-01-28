import React from "react";

const Field = ({ label, children, htmlFor, error }) => {
  const id = htmlFor || getChildId(children);
  return (
    <div className="flex flex-col items-start justify-start mt-2 p-0 w-full mr-2">
      {label && <label htmlFor={id} className="mb-1" >{label}</label>}
      {children}
      {!!error && <div className="text-red-500" >{error.message}</div>}
    </div>
  );
};

const getChildId = (children) => {
  
  if (React.isValidElement(children) && children.props?.id) {
    return children.props.id;
  }
  return undefined;
};

export default Field;
