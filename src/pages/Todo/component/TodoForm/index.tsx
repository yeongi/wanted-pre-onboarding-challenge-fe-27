import { FormEvent } from 'react';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { postTodo } from '@/api/todo';

type TodoFormProps = {
  handleClose: () => void;
};

export const TodoForm = ({ handleClose }: TodoFormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      postTodo({
        title: formData.get('title') as string,
        content: formData.get('content') as string,
      });

      alert('성공적으로 등록되었습니다.');
    } catch (error) {
      if (error instanceof Error) {
        alert(`할 일 넣기 실패: ${error.message}`);
      } else {
        alert('할 일 넣기 중 알 수 없는 오류가 발생했습니다.');
      }
    } finally {
      handleClose();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>제목</label>
      <Input name='title' />
      <label>할 일</label>
      <Input name='content' />
      <Button type='submit'>오늘 할 일 목록 적기</Button>
    </form>
  );
};
