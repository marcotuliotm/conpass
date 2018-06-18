import React from 'react';
import { H1, BtnAdd, AAdd } from './Styles';

function UserTableHeader(props) {
  const { title } = props;
  return (
    <div className="row justify-content-center">

      <div className="col-5">
        <H1>{title}</H1>
      </div>
      <div className="col-5">
        <BtnAdd>
          <AAdd to="/new" role="button">Add new user</AAdd>
        </BtnAdd>
      </div>

    </div>
  );
}

export default UserTableHeader;
