import { httpHandler } from '@/lib/http/handler';
import { BdfAxiosInstance } from '@/lib/http/instances';
import { PredictRequest, PredictResponse } from '@/types';

export const postPredict = async (body: PredictRequest) => {
  return await httpHandler<PredictRequest, PredictResponse>({
    instance: BdfAxiosInstance,
    endpoint: '/predict',
    method: 'POST',
    body,
  });
};
