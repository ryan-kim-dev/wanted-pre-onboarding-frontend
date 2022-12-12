import { Button, Input } from '../index';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { FormProps } from '../../types';
import { handleSignup, handleSignin } from '../../apis';
import { ROUTEPATH } from '../../constants';

function Form({ onChange, userInfo, isValid, formType }: FormProps) {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formType === 'signup') {
      handleSignup(userInfo).then(res => {
        if (res.statusCode === 400) return alert(`${res.message}`);
        const { access_token } = res.data;
        localStorage.setItem('access_token', access_token);
        return alert('정상적으로 회원가입되었습니다.');
      });
    }

    if (formType === 'signin') {
      handleSignin(userInfo).then(res => {
        if (res.statusCode === 401)
          return alert('이메일과 비밀번호를 다시 확인해주세요');
        localStorage.access_token = res.data.access_token;
        return navigate(ROUTEPATH.TODO);
      });
    }
  };

  return (
    <S.FormLayout onSubmit={handleSubmit}>
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
