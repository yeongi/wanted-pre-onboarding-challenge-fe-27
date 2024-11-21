import { tokenClient } from '@/util/tokenClient.ts';

export const BASE_URL = 'http://localhost:8080';

const getWithToken = async (url: string) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenClient.get()}`,
      },
    });

    if (!response.ok) {
      // HTTP 오류 상태 코드에 대한 처리 4xx
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    // 네트워크 오류나 기타 예외 처리 5xx
    if (error instanceof Error) {
      throw new Error(`API 요청 실패: ${error.message}`);
    }

    throw new Error('서버에서 발생한 문제입니다. 서버개발자 한테 찾아가세요.');
  }
};

const postWithToken = async (url: string, body: unknown) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenClient.get()}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      // HTTP 오류 상태 코드에 대한 처리 4xx
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    // 네트워크 오류나 기타 예외 처리 5xx
    if (error instanceof Error) {
      throw new Error(`API 요청 실패: ${error.message}`);
    }

    throw new Error('서버에서 발생한 문제입니다. 서버개발자 한테 찾아가세요.');
  }
};

const putWithToken = async (url: string, body: unknown) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenClient.get()}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      // HTTP 오류 상태 코드에 대한 처리 4xx
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    // 네트워크 오류나 기타 예외 처리 5xx
    if (error instanceof Error) {
      throw new Error(`API 요청 실패: ${error.message}`);
    }

    throw new Error('서버에서 발생한 문제입니다. 서버개발자 한테 찾아가세요.');
  }
};

const deleteWithToken = async (url: string) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenClient.get()}`,
      },
    });

    if (!response.ok) {
      // HTTP 오류 상태 코드에 대한 처리 4xx
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    // 네트워크 오류나 기타 예외 처리 5xx
    if (error instanceof Error) {
      throw new Error(`API 요청 실패: ${error.message}`);
    }

    throw new Error('서버에서 발생한 문제입니다. 서버개발자 한테 찾아가세요.');
  }
};

const post = async (url: string, params?: unknown) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      // HTTP 오류 상태 코드에 대한 처리 4xx
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    // 네트워크 오류나 기타 예외 처리 5xx
    if (error instanceof Error) {
      throw new Error(`API 요청 실패: ${error.message}`);
    }

    throw new Error('서버에서 발생한 문제입니다. 서버개발자 한테 찾아가세요.');
  }
};

export const fetchClient = {
  post,
  getWithToken,
  postWithToken,
  putWithToken,
  deleteWithToken,
};
