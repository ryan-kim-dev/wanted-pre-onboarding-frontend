import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: max-content;
  max-width: 1330px;
  padding: 0 160px;
  @media screen and (max-width: 479px) {
    padding: 0;
  }
`;
