import { TodoAddButton, TodoList } from '@/pages/Todo/part';
import { useCallback, useEffect, useState } from 'react';
import { TodoType, getTodos } from '@/api/todo';

export const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>();

  const fetchTodos = useCallback(async () => {
    const { data } = await getTodos();
    setTodos(data);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <>
      <h1>Todo 관리 페이지</h1>
      <section>
        <TodoList todos={todos} />
        <TodoAddButton handleTodoRefetch={fetchTodos} />
      </section>
    </>
  );
};
