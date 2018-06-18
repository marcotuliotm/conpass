import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StepStyled = styled.div`
  font-size: 13px;
  letter-spacing: 1px;
  line-height: 23px;
  ${(props) => {
    if (props.current) {
      return ('color: #555E5E;');
    } else if (props.done) {
      return ('color: #E8E9DB; ');
    }
    return ('color: grey;');
  }}
    
  font-family: "Gotham";
  text-align: center;
  font-weight: bold;
`;

const ElipseStyled = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  ${(props) => (props.current ? 'background-color: springgreen; ' : 'background-color: lightgray')}
  ${(props) => (props.done ? 'background-color: springgreen; ' : '')}
  margin-right: 10px;
`;


function Step(props) {
  const {
    current, step, done,
  } = props;
  return (
    <div>
      <ElipseStyled done={done} current={current}>
        <StepStyled done={done} current={current} >
          {step}
        </StepStyled>
      </ElipseStyled>
    </div>
  );
}

Step.propTypes = {
  step: PropTypes.number.isRequired,
  current: PropTypes.bool.isRequired,
  done: PropTypes.bool.isRequired,
};


export default Step;

