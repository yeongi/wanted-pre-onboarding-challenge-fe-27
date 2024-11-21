import { useState } from 'react';
import { Button } from '@/components/ui/button.tsx';
import { TodoForm } from '@/pages/Todo/component/TodoForm';

type TodoAddButtonProps = {
  handleTodoRefetch: () => void;
};

export const TodoAddButton = ({ handleTodoRefetch }: TodoAddButtonProps) => {
  const [isTodoFormOpen, setIsTodoFormOpen] = useState(false);

  if (!isTodoFormOpen)
    return <Button onClick={() => setIsTodoFormOpen(true)}>투두 넣기</Button>;

  return (
    <TodoForm
      handleClose={() => {
        setIsTodoFormOpen(false);
        handleTodoRefetch();
      }}
    />
  );
};
