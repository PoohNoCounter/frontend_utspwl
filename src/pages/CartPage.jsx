import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import TitleWBack from "../components/TitleWBack";
import CardCart from "../components/CardCart";
import { useCartContext } from "../hooks/useCartContext";

const CartPage = () => {
  const navigate = useNavigate();

  const { cartItems } = useCartContext();

  return (
    <div>
      <div className="flex items-center justify-between">
        <TitleWBack title="Cart" />
        <Button className="bg-red-600" onClick={() => navigate("/checkout")}>
          Checkout
        </Button>
      </div>
      <div className="mt-5 grid md:grid-cols-4 grid-cols-2 gap-2">
        {cartItems?.map(
          ({ id, name, description, price, image, stock, quantity }) => (
            <CardCart
              key={id}
              id={id}
              name={name}
              description={description}
              price={price}
              image={image}
              stock={stock}
              quantity={quantity}
            />
          )
        )}
      </div>
    </div>
  );
};

export default CartPage;
