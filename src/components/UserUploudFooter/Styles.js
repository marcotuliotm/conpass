import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtnAdd = styled.div`
  float: right;
  margin-top: 30px;
`;

export const AAdd = styled(NavLink)`
  font-weight: bold !important;
`;

export const Button = styled.button.attrs({
  className: 'btn btn-success',
})`
  margin-top: 25px;
`;

