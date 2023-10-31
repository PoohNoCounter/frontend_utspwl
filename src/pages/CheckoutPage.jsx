import TitleWBack from "../components/TitleWBack";
import { useCartContext } from "../hooks/useCartContext";

const CheckoutPage = () => {
  const { cartItems } = useCartContext();

  return (
    <div>
      <TitleWBack title="Checkout" />
      <table className="w-full mt-10">
        <thead>
          <tr>
            <th className="text-left">Item</th>
            <th className="text-left">Quantity</th>
            <th className="text-left">Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.map(
            ({ id, name, description, price, image, stock, quantity }) => (
              <tr key={id}>
                <td>{name}</td>
                <td className="text-left">{quantity}</td>
                <td className="text-left">Rp. {price}</td>
                <td className="text-center">Rp. {price * quantity}</td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <div className="mt-5 flex justify-end">
        <div className="w-1/3">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>
              Rp.{" "}
              {cartItems?.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              )}
            </p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>
              Rp.{" "}
              {cartItems?.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              ) > 100000
                ? 0
                : 10000}
            </p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p>
              Rp.{" "}
              {cartItems?.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              ) > 100000
                ? cartItems?.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )
                : cartItems?.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  ) + 10000}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
