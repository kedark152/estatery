import { Routes, Route } from "react-router-dom";
import { RentProperty } from "../pages/RentProperty";
import { Wishlist } from "../pages/Wishlist";
export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RentProperty />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
};
