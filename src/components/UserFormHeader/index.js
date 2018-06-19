import React from 'react';
import PropTypes from 'prop-types';
import Step from './step';
import { H1, Container } from './Styles';

function UserFormHeader(props) {
  const { title } = props;
  return (
    <div className="row justify-content-center">

      <div className="col-3">
        <H1>{title}</H1>
      </div>
      <div className="col-3">
        <Container>
          <Step
            id="stepUserFormHeader1"
            current
            step={1}
            message="-"
            done
          />
          <Step
            id="stepUserFormHeader2"
            current={false}
            step={2}
            message=""
            done={false}
          />
        </Container>
      </div>

    </div>
  );
}

UserFormHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default UserFormHeader;
