import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';

import { useUserSignUp } from './hook.ts';
import { isEmailValid, isPasswordValid } from '@/util/validation.ts';

export const SignUp = () => {
  const { formData, handleChange, handleSignUpSubmit } = useUserSignUp();

  const isSubmitValid =
    isEmailValid(formData.email) && isPasswordValid(formData.password);

  return (
    <>
      <h1> 회원가입 페이지 </h1>
      <form onSubmit={handleSignUpSubmit}>
        <div>
          <label>아이디</label>
          <p>최소 @, . 포함해서 입력해주세요. </p>
          <Input name='email' value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>비밀번호</label>
          <p>최소 8글자 이상 입력해주세요.</p>
          <Input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <Button type='submit' disabled={!isSubmitValid}>
          회원가입 하기
        </Button>
      </form>
    </>
  );
};
