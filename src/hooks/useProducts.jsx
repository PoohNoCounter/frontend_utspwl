import useSWR from "swr";
import { axiosInstance } from "../utils/axios";

const useProducts = () => {
  const fethcer = (url) => axiosInstance.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR("/api/v1/product", fethcer);

  return { data, error, isLoading };
};

export default useProducts;
