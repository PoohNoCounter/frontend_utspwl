import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import TitleWBack from "../components/TitleWBack";
import useProduct from "../hooks/useProduct";
import * as Icons from "react-icons/fa";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, error } = useProduct(id);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Icons.FaSpinner className="animate-spin text-4xl" />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-screen">
          <p className="text-red-500">{error.message}</p>
        </div>
      ) : (
        <div>
          <TitleWBack title="Detail Page" />

          <div className="flex justify-center gap-3 max-w-xl mx-auto mt-10 ">
            <div className="w-1/2 h-1/2 bg-gray-500 rounded-md">
              <img
                src={data?.data?.image}
                alt="product"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{data?.data?.name}</h1>
              <p className="text-sm text-gray-500">{data?.data?.description}</p>
              <p className="text-sm text-gray-500">Rp. {data?.data?.price}</p>
              <p className="text-sm text-gray-500">
                Stock : {data?.data?.stock}
              </p>
              <div className="flex items-center gap-4 mt-5">
                <Button
                  className="bg-yellow-600"
                  onClick={() => navigate(`/edit/${id}`)}
                >
                  Edit
                </Button>
                <Button className="bg-red-600">Delete</Button>
                <Button className="">Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
