import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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

  /** 회원가입 요청 핸들러 함수 */
  const handleSignup = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    return await axios
      .post('https://pre-onboarding-selection-task.shop/auth/signup', userInfo)
      .then(res => {
        const { access_token } = res.data;
        localStorage.setItem('access_token', access_token);
        console.log(access_token);
      })
      .catch(err => alert(`${err}`));
  };

  /**로그인 요청 핸들러 함수 */
  const handleSignin = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    return await axios
      .post('https://pre-onboarding-selection-task.shop/auth/signin', userInfo)
      .then(res => {
        localStorage.access_token = res.data.access_token;
        const loginStatus = true;
        localStorage.setItem('loginStatus', String(loginStatus));
        return navigate(ROUTEPATH.TODO);
      })
      .catch(err => alert(`${err}`));
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
            회원가입
          </S.AuthChangeBtn>
          <S.AuthChangeBtn onClick={() => setFormType('signin')}>
            로그인
          </S.AuthChangeBtn>
        </S.BtnWrapper>
        <Form
          onChange={onChange}
          userInfo={userInfo}
          isValid={isValid}
          formType={formType}
          handleSignup={handleSignup}
          handleSignin={handleSignin}
        />
      </S.AuthFormContainer>
    </Layout>
  );
}

export default Auth;
