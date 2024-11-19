import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { internalPages } from '@/route.tsx';
import { PostUserRequest, postUserSignUp } from '@/api/user';

export const useUserSignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<PostUserRequest>({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignUpSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await postUserSignUp(formData);
      navigate(internalPages.LOGIN);

      alert('회원가입이 성공적으로 되었습니다.');
    } catch (error) {
      if (error instanceof Error) {
        alert(`회원가입 실패: ${error.message}`);
      } else {
        alert('회원가입 중 알 수 없는 오류가 발생했습니다.');
      }
    }
  };
  return {
    formData,
    handleChange,
    handleSignUpSubmit,
  };
};
