import { DeleteTodoRequest, PutTodoRequest, TodoType } from '@/api/todo';
import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import { TodoForm } from '@/pages/Todo/component/TodoForm';

type TodoCardProps = {
  todo: TodoType;
  handleDelete: (requestObj: DeleteTodoRequest) => void;
  handleUpdateTodo: (requestObj: PutTodoRequest) => void;
};

export const TodoCard = ({
  todo,
  handleDelete,
  handleUpdateTodo,
}: TodoCardProps) => {
  const [isEditTodo, setIsEditTodo] = useState(false);

  const handleDeleteTodo = () => {
    handleDelete({
      id: todo.id,
    });
  };

  if (!isEditTodo)
    return (
      <div>
        <div>
          <label>제목 :</label>
          <h1>{todo.title}</h1>
        </div>
        <div>
          <label>할 일 :</label>
          <p>{todo.content}</p>
        </div>
        <Button onClick={() => setIsEditTodo(true)}>수정 하기</Button>
        <Button onClick={handleDeleteTodo}>삭제 하기</Button>
      </div>
    );

  return (
    <div>
      <TodoForm
        handleClose={() => setIsEditTodo(false)}
        handleUpdateTodo={handleUpdateTodo}
        todo={todo}
      />
    </div>
  );
};
