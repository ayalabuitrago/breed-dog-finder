import { AxiosInstance, Method } from 'axios';

export interface PredictRequest {
  base64: string;
}

export interface PredictResponse {
  accuracy: number;
  breed_dog: string;
  unreliable: boolean;
}

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

export interface HistoryItem extends PredictResponse {
  id: string;
  date: string; // Formato ISO
  image_uri: string;
}
