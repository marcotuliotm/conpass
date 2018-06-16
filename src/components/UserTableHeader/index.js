import React from 'react';
import { H1, BtnAdd, AAdd } from './Styles';

function UserTableHeader(props) {
  const { title } = props;
  return (
    <div className="row">
      <div className="col col-md">
        <H1>{title}</H1>
      </div>
      <div className="col col-md">
        <BtnAdd>
          <AAdd href="#" role="button">Add new user</AAdd>
        </BtnAdd>
      </div>
    </div>
  );
}

export default UserTableHeader;
