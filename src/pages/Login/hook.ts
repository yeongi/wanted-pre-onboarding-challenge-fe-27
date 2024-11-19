import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { postUserLogin, PostUserRequest } from '@/api/user';
import { internalPages } from '@/route.tsx';
import { tokenClient } from '@/util/tokenClient.ts';

export const useUserLogin = () => {
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
      const res = await postUserLogin(formData);
      tokenClient.set(res.token);
      navigate(internalPages.MAIN);
      alert('로그인이 성공적으로 되었습니다.');
    } catch (error) {
      if (error instanceof Error) {
        alert(`로그인 실패: ${error.message}`);
      } else {
        alert('로그인 중 알 수 없는 오류가 발생했습니다.');
      }
    }
  };
  return {
    formData,
    handleChange,
    handleSignUpSubmit,
  };
};
