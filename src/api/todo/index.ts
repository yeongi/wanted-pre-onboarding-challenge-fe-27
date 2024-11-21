import { fetchClient } from '@/api/fetchClient.ts';

export type TodoType = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

type GetTodosResponse = {
  data: TodoType[];
};

export const getTodos = async (): Promise<GetTodosResponse> => {
  return fetchClient.getWithToken('/todos');
};

type GetTodoByIdRequest = {
  id: number;
};

type GetTodoByIdResponse = {
  data: TodoType[];
};

export const getTodoById = async ({
  id,
}: GetTodoByIdRequest): Promise<GetTodoByIdResponse> => {
  return fetchClient.getWithToken(`/todos/${id}`);
};

export type PostTodoRequest = {
  title: string;
  content: string;
};

type PostTodoResponse = {
  data: TodoType;
};

export const postTodo = async (
  params: PostTodoRequest
): Promise<PostTodoResponse> => {
  return fetchClient.postWithToken('/todos', params);
};

export type PutTodoRequest = {
  id: number;
  title: string;
  content: string;
};

type PutTodoResponse = {
  data: TodoType;
};

export const updateTodo = async ({
  id,
  ...body
}: PutTodoRequest): Promise<PutTodoResponse> => {
  return fetchClient.putWithToken(`/todos/${id}`, body);
};

export type DeleteTodoRequest = {
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
