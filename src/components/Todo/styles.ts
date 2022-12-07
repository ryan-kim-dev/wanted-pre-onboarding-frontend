import styled from 'styled-components';
import { STYLES } from '../../constants';

export const TodoItemLayout = styled.div`
  border: 2px solid ${STYLES.BASE};
  border-radius: ${STYLES.DEG};
  display: flex;
  justify-content: center;
  padding: 1rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
`;

export const OnEditWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 5px;
  background-color: ${STYLES.MAIN};
`;

export const TaskInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 5px;
  background-color: ${STYLES.MAIN};
`;

export const TaskInfoText = styled.p`
  padding: 10px 30px;
  width: 200px;
`;

export const FunctionBtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${STYLES.BASE};

  :hover {
    color: ${STYLES.ACCENT};
    font-weight: bold;
  }
`;
