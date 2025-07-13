import { httpHandler } from "@/data/http/handler";
import { BdfAxiosInstance } from "@/data/http/instance/";
import {PredictRequest, PredictResponse} from "@/types";

export const postPredict = async (data: PredictRequest) => {
    return await httpHandler<PredictRequest, PredictResponse>({
        instance: BdfAxiosInstance,
        endpoint: '/predict',
        method: 'POST',
        body: data,
    });
}