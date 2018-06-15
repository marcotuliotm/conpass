import React from 'react';
import styled from 'styled-components';


const BtnAdd = styled.div`
  float: right;
`;

function UserTableHeader(props) {
  const { title } = props;
  return (
    <div className="row">
      <div className="col col-md">
        <h1>{title}</h1>
      </div>
      <div className="col col-md">
        <BtnAdd>
          <a className="btn btn-primary btn-lg" href="#" role="button">Add new user</a>
        </BtnAdd>
      </div>
    </div>
  );
}

export default UserTableHeader;
