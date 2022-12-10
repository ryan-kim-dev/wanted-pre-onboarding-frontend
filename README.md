# 원티드 프리온보딩 과제 - 김현호

## 프로젝트의 실행 방법

```
npm install
npm start
```

## 배포 링크

https://wanted-pre-onboarding-frontend-bay.vercel.app/

## Branches

- master: 최종 배포용 버젼
- dev: 새 기능 추가, 리팩토링을 위한 feature 브랜치의 source
  - feature/auth: 회원가입/로그인 기능 요구사항 구현
  - feature/todo: 투두리스트 CRUD 기능의 요구사항 구현
  - feature/refactor/types: 타입들을 별도 폴더에 분리한 리팩토링
  - feature/refactor/apis: 회원관리, 투두 CRUD API 요청 로직 분리, API 요청 함수 중복 제거
  - feature/styling: 전체 앱 스타일링

## Update Log

### v1.0

#### 완료
- 회원가입/로그인 구현
- 할 일 CRUD 구현
- 전체 스타일링

#### 개선할 것
1. 회원가입/로그인 함수 apis 폴더로 분리 필요
2. 회원가입/로그인 폼 선택메뉴 동적 스타일링으로 선택된 메뉴 시각적으로 보이게 개선 필요
3. 로그아웃 기능 추가 필요
4. 예외처리
  - 회원가입 시 이미 가입된 계정의 경우
  - 로그인 실패의 경우
5. API 요청 성공 시 화면 동작
  - 할일 추가/수정/삭제 성공 시 화면 모달

### v1.1
- 로그아웃 기능 추가
- 회원가입/로그인 폼 선택메뉴 동적 스타일링으로 선택된 메뉴 시각적으로 보이게 개선
