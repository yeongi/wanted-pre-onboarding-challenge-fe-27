import { fetchClient } from '@/api/fetchClient.ts';

export type PostUserRequest = {
  email: string;
  password: string;
};

type PostUserSignUpRequest = PostUserRequest;

type PostUserResponse = {
  message: string;
  token: string;
};

export const postUserLogin = async (
  params: PostUserRequest
): Promise<PostUserResponse> => {
  return await fetchClient.post('/users/login', params);
};

export const postUserSignUp = async (
  params: PostUserSignUpRequest
): Promise<PostUserResponse> => {
  return fetchClient.post('/users/create', params);
};
