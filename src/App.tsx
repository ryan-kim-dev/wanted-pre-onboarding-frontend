/**
 
 1: / 경로에 로그인 / 회원가입 기능을 개발해주세요
페이지 안에 이메일 입력창, 비밀번호 입력창, 제출 버튼이 포함된 형태로 구성해주세요
로그인, 회원가입을 별도의 경로로 분리해도 무방합니다.
2:  Assignment1

이메일과 비밀번호의 유효성 검사기능을 구현해주세요
이메일 조건: @ 포함
비밀번호 조건: 8자 이상
입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 해주세요
보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.
 */

import { Routes, Route } from 'react-router-dom';
import { ROUTEPATH } from './constants';
import Auth from './pages/Auth';
import Todos from './pages/Todos';

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTEPATH.ROOT} element={<Auth />} />
        <Route path={ROUTEPATH.TODO} element={<Todos />} />
      </Routes>
    </>
  );
}

export default App;
