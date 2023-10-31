import { Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import CartPage from "./pages/CartPage";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import CheckoutPage from "./pages/CheckoutPage";
import { RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  // create routes
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="add" element={<AddPage />} />
          <Route path="detail/:id" element={<DetailPage />} />
          <Route path="edit/:id" element={<EditPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={routes} />;
};

export default App;
