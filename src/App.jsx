import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { Home } from "./components/Home";
import { ProductPage } from "./components/ProductPage";
import { ProductOnSale } from "./components/ProductOnSale";
import { CateoryPage } from "./components/CateoryPage";
import { CartPage } from "./components/CartPage";
import { CheckoutPage } from "./components/CheckoutPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path=":category/shoe1" element={<ProductPage />} />
      <Route path=":category/apparel4" element={<ProductOnSale />} />
      <Route path=":category" element={<CateoryPage />} />
      <Route path="/Cart" element={<CartPage />} />
      <Route path="/Checkout" element={<CheckoutPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
