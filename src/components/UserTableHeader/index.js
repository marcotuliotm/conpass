import React from 'react';


function UserTableHeader(props) {
  const { title } = props;
  return (
    <div>
      {title && <h1>{title}</h1>}
    </div>
  );
}

export default UserTableHeader;
