import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTEPATH } from '../constants';
import { Layout, Form } from '../components';
import * as S from './styles.Auth';

function Auth() {
  const navigate = useNavigate();
  const [formType, setFormType] = useState('signup');
  const [isValid, setIsValid] = useState(true);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (localStorage.access_token) return navigate(ROUTEPATH.TODO);

    userInfo.email.includes('@') && userInfo.password.length >= 8
      ? setIsValid(false)
      : setIsValid(true);
  }, [userInfo, navigate]);

  return (
    <Layout>
      <S.AuthFormContainer>
        <S.BtnWrapper>
          <S.AuthChangeBtn onClick={() => setFormType('signup')}>
            <div id={formType === 'signup' ? 'active' : 'deactivate'}>
              회원가입
            </div>
          </S.AuthChangeBtn>
          <S.AuthChangeBtn onClick={() => setFormType('signin')}>
            <div id={formType === 'signin' ? 'active' : 'deactivate'}>
              로그인
            </div>
          </S.AuthChangeBtn>
        </S.BtnWrapper>
        <Form
          onChange={onChange}
          userInfo={userInfo}
          isValid={isValid}
          formType={formType}
        />
      </S.AuthFormContainer>
    </Layout>
  );
}

export default Auth;
