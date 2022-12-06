import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ROUTEPATH } from '../constants';

/**
 Assignment2

로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동해주세요
로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
응답받은 JWT는 로컬 스토리지에 저장해주세요

Assignment3

로그인 여부에 따른 리다이렉트 처리를 구현해주세요
로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요
로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 / 경로로 리다이렉트 시켜주세요

*/

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
    <div>
      <div>
        <div onClick={() => setFormType('signup')}>회원가입</div>
        <div onClick={() => setFormType('signin')}>로그인</div>
      </div>
      <form onSubmit={formType === 'signin' ? handleSignin : handleSignup}>
        <h2>{formType === 'signin' ? '로그인 하기' : '회원가입 하기'}</h2>
        <label htmlFor="email">
          <span>email</span>
          <input type="email" id="email" name="email" onChange={onChange} />
        </label>
        <p>
          {userInfo.email.includes('@')
            ? null
            : '@이 포함된 올바른 이메일 주소를 입력하세요'}
        </p>
        <label htmlFor="password">
          <span>password</span>
          <input
            type="password"
            id="password"
            name="password"
            onChange={onChange}
          />
        </label>
        <p>
          {userInfo.password.length >= 8
            ? null
            : '비밀번호는 8자리 이상이어야 합니다'}
        </p>
        <button type="submit" disabled={isValid}>
          제출
        </button>
      </form>
    </div>
  );
}

export default Auth;
