import React from 'react';
import { Button, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';


function UserForm(props) {
  const messageBlank = 'can\'t be blank!';
  const messageButton = 'NEXT STEP >';
  const { onValidSubmit, disabled, setFormRef, onChange, companyName, email, firstName, lastName, password, repeat } = props;
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-6">
        <AvForm ref={setFormRef} onValidSubmit={onValidSubmit} >
          <div className="form-row">
            <AvGroup className="form-group col-md-6">
              <Label for="inputFirst">First Name</Label>
              <AvInput value={firstName} onChange={onChange} required className="form-control" id="inputFirst" name="firstName" placeholder="i.e John" />
              <AvFeedback>{`First Name ${messageBlank}`}</AvFeedback>
            </AvGroup>
            <AvGroup className="form-group col-md-6">
              <Label for="inputLast">Last Name</Label>
              <AvInput value={lastName} onChange={onChange} required className="form-control" id="inputLast" name="lastName" placeholder="i.e Michael" />
              <AvFeedback>{`Last Name ${messageBlank}`}</AvFeedback>
            </AvGroup>
          </div>
          <AvGroup className="form-group">
            <Label for="inputCompany">Company Name</Label>
            <AvInput value={companyName} onChange={onChange} required className="form-control" id="inputCompany" name="companyName" placeholder="i.e Apple inc" />
            <AvFeedback>{`Company Name ${messageBlank}`}</AvFeedback>
          </AvGroup>
          <AvGroup className="form-group">
            <Label for="inputEmail">Email</Label>
            <AvInput value={email} onChange={onChange} required type="email" className="form-control" id="inputEmail" name="email" placeholder="i.e name@company.com" />
            <AvFeedback>{'Email can\'t be invalid or blank!'}</AvFeedback>
          </AvGroup>
          <div className="form-row">
            <AvGroup className="form-group col-md-6">
              <Label for="inputPassword">Password</Label>
              <AvInput value={password} onChange={onChange} required type="password" className="form-control" id="inputPassword" name="password" />
              <AvFeedback>{`Password ${messageBlank}`}</AvFeedback>
            </AvGroup>
            <AvGroup className="form-group col-md-6">
              <Label for="inputRepeat">Repeat Password</Label>
              <AvInput value={repeat} onChange={onChange} required type="password" className="form-control" id="inputRepeat" name="repeat" validate={{ match: { value: 'password' } }} />
              <AvFeedback>{'Password dont match!'}</AvFeedback>
            </AvGroup>
          </div>
          <Button disabled={disabled} type="submit" className="btn btn-success">{messageButton}</Button>
        </AvForm>
      </div>
    </div>
  );
}

export default UserForm;
