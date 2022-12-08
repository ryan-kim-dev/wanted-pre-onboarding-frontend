export type FormProps = {
  // TODO : 리팩토링 브랜치에서 types 폴더로 이동시킬 것
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userInfo: {
    email: string;
    password: string;
  };
  isValid: boolean;
  formType: string;
  handleSignup: (e: React.ChangeEvent<HTMLFormElement>) => Promise<void>;
  handleSignin: (e: React.ChangeEvent<HTMLFormElement>) => Promise<void>;
};
