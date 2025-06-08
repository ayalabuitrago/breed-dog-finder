import { httpHandler } from "../http/handler/http-handler";
import BdfAxiosInstance from "../http/instance/bdf-axios-instance";

export const getStartAPi = () => {
    const response = httpHandler({
        instance: BdfAxiosInstance,
        endpoint: "/start"
    });

    return response;
}