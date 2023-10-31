import Button from "../components/Button";
import * as Icons from "react-icons/fa";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";

const HomePage = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useProducts();

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
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Products</h1>
            <Button onClick={() => navigate("/add")}>
              Add Product
              <Icons.FaPlus />
            </Button>
          </div>
          <div className="mt-4 grid md:grid-cols-4 grid-cols-2 gap-2">
            {data?.data?.map(
              ({ id, name, description, price, image, stock }) => (
                <Card
                  key={id}
                  id={id}
                  name={name}
                  description={description}
                  price={price}
                  image={image}
                  stock={stock}
                />
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
