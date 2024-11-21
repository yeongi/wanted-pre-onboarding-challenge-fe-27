import { TodoAddButton, TodoList } from '@/pages/Todo/part';
import { useTodoService } from '@/pages/Todo/hook.ts';

export const Todo = () => {
  const { todos, handleUpdateTodo, handleAddTodo, handleDelete } =
    useTodoService();

  return (
    <>
      <h1>Todo 관리 페이지</h1>
      <section>
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleUpdateTodo={handleUpdateTodo}
        />
        <TodoAddButton handleAddTodo={handleAddTodo} />
      </section>
    </>
  );
};
