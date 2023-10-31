import * as Icons from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";

const HeaderLayout = () => {
  const navigate = useNavigate();

  const { cartItems } = useCartContext();

  return (
    <header className="flex items-center justify-between pb-2">
      <h1 className="font-semibold text-2xl">Online Mart</h1>
      <div className="flex items-center gap-3">
        <p>{cartItems?.reduce((acc, item) => acc + item.quantity, 0)}</p>
        <Icons.FaShoppingCart
          onClick={() => navigate("/cart")}
          className="cursor-pointer"
        />
      </div>
    </header>
  );
};

export default HeaderLayout;
