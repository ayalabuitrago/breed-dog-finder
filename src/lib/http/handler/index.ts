import { AxiosInstance, AxiosResponse, Method } from 'axios';

export interface HttpHandlerOptions<TRequest> {
  instance: AxiosInstance;
  endpoint: `/${string}`;
  method?: Method;
  body?: TRequest;
  params?: Record<string, any>;
  token?: string;
  headers?: Record<string, string>;
  abort?: AbortController;
}

export const httpHandler = async <TRequest, TResponse>({
  instance,
  endpoint,
  method = 'GET',
  body,
  params,
  token,
  headers,
  abort,
}: HttpHandlerOptions<TRequest>) => {
  const response: AxiosResponse<TResponse> = await instance.request<TResponse>({
    url: endpoint,
    method,
    params,
    data: body,
    signal: abort?.signal,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  });

  return response.data;
};
