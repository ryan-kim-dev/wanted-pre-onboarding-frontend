export type FormProps = {
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
