import styled, { css } from 'styled-components';
import { STYLES } from '../constants';
import { ButtonProps } from '../types';

export const Button = styled.button<ButtonProps>`
  border-radius: ${STYLES.DEG};
  background-color: ${STYLES.ACCENT};
  color: #fff;
  border: none;
  padding: 0.3rem 1rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);

  ${({ buttonType }) =>
    buttonType === 'cancel' &&
    css`
      background-color: transparent;
      color: black;
    `}
`;
