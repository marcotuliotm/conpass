import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtnAdd = styled.div`
  float: right;
`;

export const AAdd = styled(NavLink).attrs({
  className: 'btn btn-primary ',
})`
  font-weight: bold !important;
`;

export const H1 = styled.h1.attrs({
  className: 'display-4',
})`
`;
