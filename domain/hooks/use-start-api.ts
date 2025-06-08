import { getStartAPi } from "@/infraestructure/api/start";
import { useQuery } from "@tanstack/react-query";

export const useStartApi = () => {
    const startApiQuery = useQuery({
        queryKey: ["start-api"],
        queryFn: () => getStartAPi(),
        staleTime: 900000, // 15 min
    });

    return { startApiQuery }
}