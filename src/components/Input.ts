import styled, { css } from 'styled-components';
import { STYLES } from '../constants';
import { InputProps } from '../types';

export const Input = styled.input<InputProps>`
  border-radius: ${STYLES.DEG};
  margin-right: 10px;

  ${({ inputType }) =>
    inputType === 'todo' &&
    css`
      width: 200px;
      height: 30px;
    `}

  ${({ inputType }) =>
    inputType === 'auth' &&
    css`
      width: 300px;
      height: 30px;
    `}
`;
