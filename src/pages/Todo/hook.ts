import { useCallback, useEffect, useState } from 'react';
import {
  deleteTodo,
  getTodos,
  postTodo,
  updateTodo,
  DeleteTodoRequest,
  PostTodoRequest,
  PutTodoRequest,
  TodoType,
} from '@/api/todo';

export const useTodoService = () => {
  const [todos, setTodos] = useState<TodoType[]>();

  const fetchTodos = useCallback(async () => {
    const { data } = await getTodos();
    setTodos(data);
  }, []);

  const handleDelete = async ({ id }: DeleteTodoRequest) => {
    try {
      await deleteTodo({
        id,
      });
      await fetchTodos();
    } catch (error) {
      if (error instanceof Error) {
        alert(`할 일 삭제 실패: ${error.message}`);
      } else {
        alert('할 일 삭제 중 알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  const handleUpdateTodo = async ({ id, title, content }: PutTodoRequest) => {
    try {
      await updateTodo({
        id,
        title,
        content,
      });
      await fetchTodos();
    } catch (error) {
      if (error instanceof Error) {
        alert(`할 일 수정 실패: ${error.message}`);
      } else {
        alert('할 일 수정 중 알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  const handleAddTodo = async ({ title, content }: PostTodoRequest) => {
    try {
      await postTodo({
        title,
        content,
      });
      await fetchTodos();

      alert('성공적으로 등록되었습니다.');
    } catch (error) {
      if (error instanceof Error) {
        alert(`할 일 넣기 실패: ${error.message}`);
      } else {
        alert('할 일 넣기 중 알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return {
    todos,
    handleAddTodo,
    handleUpdateTodo,
    handleDelete,
  };
};
