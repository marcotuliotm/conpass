import React from 'react';

function UserFormHeader(props) {
  const { title } = props;
  return (
    <div className="row justify-content-center">
      <h1 className="display-4">{title}</h1>
    </div>
  );
}

export default UserFormHeader;
