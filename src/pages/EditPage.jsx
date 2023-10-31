import { useForm } from "react-hook-form";
import TitleWBack from "../components/TitleWBack";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import * as Icons from "react-icons/fa";
import useProduct from "../hooks/useProduct";
import { axiosInstance } from "../utils/axios";
import { useNavigate } from "react-router-dom";

function EditPage() {
  const { id } = useParams();

  const { data, isLoading, error } = useProduct(id);

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      data.id = parseInt(id);
      data.price = parseInt(data.price);
      data.stock = parseInt(data.stock);

      console.log(data);
      await axiosInstance.put(`/api/v1/product`, data);
      alert("Product updated");
      navigate("/");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

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
        <div className="container mx-auto">
          <TitleWBack title={"Edit"} />
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Product name"
                defaultValue={data?.data?.name}
                {...register("name", { required: true })}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="number"
                placeholder="Product price"
                defaultValue={data?.data?.price}
                {...register("price", { required: true })}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Product description"
                defaultValue={data?.data?.description}
                {...register("description", { required: true })}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="stock"
              >
                Stock
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="stock"
                type="number"
                placeholder="Product stock"
                defaultValue={data?.data?.stock}
                {...register("stock", { required: true })}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="imageUrl"
              >
                Image URL
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="imageUrl"
                type="text"
                placeholder="Product image URL"
                defaultValue={data?.data?.image}
                {...register("image", { required: true })}
              />
            </div>
            <div className="flex items-center justify-between">
              <Button className="mx-auto" type={"submit"}>
                Save
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default EditPage;
