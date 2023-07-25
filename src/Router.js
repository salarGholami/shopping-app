import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";

const routes = [
  { path: "/", Element: <HomePage /> },
  { path: "/cart", Element: <Cart /> },
];

export default routes;
