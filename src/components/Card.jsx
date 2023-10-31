import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useCartContext } from "../hooks/useCartContext";

/* eslint-disable react/prop-types */
const Card = ({ id, name, description, image, price, stock }) => {
  const navigate = useNavigate();

  const { addItemToCart } = useCartContext();

  return (
    <div
      className="bg-gray-200 p-2 rounded-md cursor-pointer"
      onClick={() => navigate(`/detail/${id}`)}
    >
      <div className="bg-gray-500 w-full h-40 rounded-md">
        <img
          src={image}
          alt="product"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <h1 className="text-xl font-semibold">{name}</h1>
      <p className="text-xs">{description}</p>
      <div className="flex justify-between items-end">
        <div>
          <p className="text-xs mt-4">Rp. {price}</p>
          <p className="text-xs">Stok : {stock}</p>
        </div>
        <Button
          onClick={(event) => {
            event.stopPropagation();
            addItemToCart({ id, name, description, image, price, stock });
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default Card;
