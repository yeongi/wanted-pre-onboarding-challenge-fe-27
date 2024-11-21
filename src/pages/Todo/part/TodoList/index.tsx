import { TodoType } from '@/api/todo';
import { TodoCard } from '@/pages/Todo/part/TodoList/component';

type TodoListProps = {
  todos?: TodoType[];
};

export const TodoList = ({ todos }: TodoListProps) => {
  if (!todos) {
    return (
      <section>
        <h1>할 일 목록이 없습니다.</h1>
      </section>
    );
  }

  return (
    <section>
      <h1>할 일 목록 리스트</h1>
      {todos?.map((todo) => <TodoCard key={todo.id} todo={todo} />)}
    </section>
  );
};
