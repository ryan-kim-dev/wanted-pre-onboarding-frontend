import axios from 'axios';

/** 회원가입 요청 핸들러 함수 */
export const handleSignup = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(
      'https://pre-onboarding-selection-task.shop/auth/signup',
      data,
    );
    return response;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return err.response?.data;
    }
  }
};

/** 로그인 요청 핸들러 함수 */
export const handleSignin = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(
      'https://pre-onboarding-selection-task.shop/auth/signin',
      data,
    );
    return response;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return err.response?.data;
    }
  }
};
