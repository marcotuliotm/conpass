import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonImage = styled.button.attrs({
  className: 'btn rounded-circle',
})`
  height: 15em;
  width: 15em;
`;

export const Image = styled.img.attrs({
  className: 'rounded-circle',
})`
  height: 15em;
  width: 15em;
`;

