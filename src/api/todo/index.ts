import { fetchClient } from '@/api/fetchClient.ts';

type Todo = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

type GetTodosResponse = {
  data: Todo[];
};

export const getTodos = async (): Promise<GetTodosResponse> => {
  return fetchClient.getWithToken('/todos');
};

type GetTodoByIdRequest = {
  id: number;
};

type GetTodoByIdResponse = {
  data: Todo[];
};

export const getTodoById = async ({
  id,
}: GetTodoByIdRequest): Promise<GetTodoByIdResponse> => {
  return fetchClient.getWithToken(`/todos/${id}`);
};

type PostTodoRequest = {
  title: string;
  content: string;
};

type PostTodoResponse = {
  data: Todo;
};

export const postTodo = async (
  params: PostTodoRequest
): Promise<PostTodoResponse> => {
  return fetchClient.postWithToken('/todos', params);
};

type PutTodoRequest = {
  id: number;
  title: string;
  content: string;
};

type PutTodoResponse = {
  data: Todo;
};

export const updateTodo = async ({
  id,
  ...body
}: PutTodoRequest): Promise<PutTodoResponse> => {
  return fetchClient.putWithToken(`/todos/${id}`, body);
};

type DeleteTodoRequest = {
  id: number;
};
type DeleteTodoResponse = {
  data: null;
};

export const deleteTodo = async ({
  id,
}: DeleteTodoRequest): Promise<DeleteTodoResponse> => {
  return fetchClient.deleteWithToken(`/todos/${id}`);
};
