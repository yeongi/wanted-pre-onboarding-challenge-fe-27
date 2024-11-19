import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Link } from 'react-router-dom';
import { internalPages } from '@/route.tsx';
import { isEmailValid, isPasswordValid } from '@/util/validation.ts';
import { useUserLogin } from './hook.ts';

export const Login = () => {
  const { handleSignUpSubmit, handleChange, formData } = useUserLogin();

  const isValid =
    isPasswordValid(formData.password) && isEmailValid(formData.email);

  return (
    <>
      <h1> 로그인 페이지 </h1>
      <form onSubmit={handleSignUpSubmit}>
        <div>
          <label>아이디</label>
          <Input name='email' value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>비밀번호</label>
          <Input
            name='password'
            type='password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <Button type='submit' disabled={!isValid}>
            로그인 하기
          </Button>
          <Link to={internalPages.SIGN_UP}>
            <Button>회원가입 하러가기</Button>
          </Link>
        </div>
      </form>
    </>
  );
};
