import styled from 'styled-components';
import { STYLES } from '../../constants';

export const FormLayout = styled.form`
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 30px;
  color: #4d4d4d;
  text-shadow: 5px 5px 5px ${STYLES.ACCENT};
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const BtnWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 80%;
  }
`;

export const AlertText = styled.p`
  font-size: 10px;
  color: ${STYLES.BASE};
  padding: 5px;

  :hover {
    color: ${STYLES.ACCENT};
  }
`;
