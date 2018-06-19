import React from 'react';
import { BtnAdd, AAdd, Button } from './Styles';

function UserFormHeader(props) {
  const { handleSubmit } = props;
  const buttonTitle = 'FINISHI >';
  const linkTitle = '< Back';
  return (
    <div className="row justify-content-center ">
      <div className="col-5">
        <BtnAdd>
          <AAdd to="/new" role="button">{linkTitle}</AAdd>
        </BtnAdd>
      </div>
      <div className="col-2">
        <Button onClick={handleSubmit}>{buttonTitle}</Button>
      </div>
      <div className="col-4" />
    </div>
  );
}

export default UserFormHeader;
