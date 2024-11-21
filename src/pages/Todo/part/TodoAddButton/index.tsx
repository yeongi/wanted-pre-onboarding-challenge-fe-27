import { useState } from 'react';
import { Button } from '@/components/ui/button.tsx';
import { TodoForm } from '@/pages/Todo/component/TodoForm';
import { PostTodoRequest } from '@/api/todo';

type TodoAddButtonProps = {
  handleAddTodo({ title, content }: PostTodoRequest): void;
};

export const TodoAddButton = ({ handleAddTodo }: TodoAddButtonProps) => {
  const [isTodoFormOpen, setIsTodoFormOpen] = useState(false);

  if (!isTodoFormOpen)
    return <Button onClick={() => setIsTodoFormOpen(true)}>투두 넣기</Button>;

  return (
    <TodoForm
      handleClose={() => {
        setIsTodoFormOpen(false);
      }}
      handleAddTodo={handleAddTodo}
    />
  );
};
