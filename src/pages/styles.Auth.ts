import { STYLES } from './../constants/styles';
import styled from 'styled-components';

export const AuthFormContainer = styled.div`
  border: 2px solid ${STYLES.BASE};
  border-radius: ${STYLES.DEG};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  height: max-content;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AuthChangeBtn = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${STYLES.ACCENT};
  border-left: 1px solid ${STYLES.ACCENT};
  border-right: 1px solid ${STYLES.ACCENT};

  div {
    padding: 1rem;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #active {
    background-color: ${STYLES.ACCENT};
    color: #fff;
  }
`;
