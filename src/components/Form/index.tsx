import { Button, Input } from '../index';
import * as S from './styles';
import { FormProps } from '../../types';

function Form({
  onChange,
  userInfo,
  isValid,
  formType,
  handleSignup,
  handleSignin,
}: FormProps) {
  return (
    <S.FormLayout
      onSubmit={formType === 'signin' ? handleSignin : handleSignup}
    >
      <S.FormTitle>{formType === 'signin' ? 'LOG IN' : 'REGISTER'}</S.FormTitle>
      <S.InputLabel htmlFor="email">
        <span>email</span>
        <Input
          inputType="auth"
          type="email"
          id="email"
          name="email"
          onChange={onChange}
        />
      </S.InputLabel>
      <S.AlertText>
        {userInfo.email.includes('@')
          ? null
          : '@이 포함된 올바른 이메일 주소를 입력하세요'}
      </S.AlertText>
      <S.InputLabel htmlFor="password">
        <span>password</span>
        <Input
          inputType="auth"
          type="password"
          id="password"
          name="password"
          onChange={onChange}
        />
      </S.InputLabel>
      <S.AlertText>
        {userInfo.password.length >= 8
          ? null
          : '비밀번호는 8자리 이상이어야 합니다'}
      </S.AlertText>
      <S.BtnWrapper>
        <Button buttonType="confirm" type="submit" disabled={isValid}>
          제출
        </Button>
      </S.BtnWrapper>
    </S.FormLayout>
  );
}

export default Form;
