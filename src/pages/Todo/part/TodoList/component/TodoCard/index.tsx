import { TodoType } from '@/api/todo';

type TodoCardProps = {
  todo: TodoType;
};

export const TodoCard = ({ todo: { title, content } }: TodoCardProps) => {
  return (
    <div>
      <div>
        <label>제목 :</label>
        <h1>{title}</h1>
      </div>
      <div>
        <label>할 일 :</label>
        <p>{content}</p>
      </div>
    </div>
  );
};
