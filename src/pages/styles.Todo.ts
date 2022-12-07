import { STYLES } from './../constants/styles';
import styled from 'styled-components';
import { Container } from '../components';

export const TodoHeader = styled.header`
  position: fixed;
  top: 0;
  border-radius: ${STYLES.DEG};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const Title = styled.h2`
  padding: 1rem;
  font-size: 30px;
  color: #4d4d4d;
  text-shadow: 5px 5px 5px ${STYLES.ACCENT};
`;

export const ListContainer = styled(Container)`
  gap: 15px;
`;
