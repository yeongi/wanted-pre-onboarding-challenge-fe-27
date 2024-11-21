import { FormEvent, useState } from 'react';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { PostTodoRequest, PutTodoRequest, TodoType } from '@/api/todo';

type TodoFormProps = {
  todo?: TodoType;
  handleAddTodo?: ({ title, content }: PostTodoRequest) => void;
  handleUpdateTodo?: ({ id, title, content }: PutTodoRequest) => void;
  handleClose: () => void;
};

export const TodoForm = ({
  handleClose,
  handleAddTodo,
  handleUpdateTodo,
  todo,
}: TodoFormProps) => {
  const [title, setTitle] = useState(todo?.title);
  const [content, setContent] = useState(todo?.content);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todo && handleAddTodo) {
      handleAddTodo({
        title,
        content,
      } as PostTodoRequest);
    }

    if (todo && handleUpdateTodo) {
      handleUpdateTodo({
        id: todo.id,
        title,
        content,
      } as PutTodoRequest);
    }

    handleClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>제목</label>
      <Input
        name='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>할 일</label>
      <Input
        name='content'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      {todo && (
        <Button type='button' onClick={handleClose}>
          수정 취소 하기
        </Button>
      )}
      <Button type='submit'>
        {todo ? '할 일 수정하기' : '오늘 할 일 목록 적기'}
      </Button>
    </form>
  );
};
