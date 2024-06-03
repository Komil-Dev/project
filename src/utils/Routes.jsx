import { Route, Routes } from "react-router-dom";
import Home from "../App";
import Favorites from "../pages/Favorites.Page/Favorites";
import Savat from "../pages/Favorites.Page/Savat";
import ProductPage from "../pages/Product.Page/ProductPage";

function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/savat" element={<Savat />} />
    </Routes>
  );
}

export default RoutesPage;
