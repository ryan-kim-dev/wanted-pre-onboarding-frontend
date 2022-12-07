import styled from 'styled-components';
import { STYLES } from '../constants';

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${STYLES.MAIN};
`;
