import { NavBar } from "../components/NavBar";
import { useWishlist } from "../context/wishlist-context";
import { PropertyCard } from "../components/PropertyCard";
import "../styles/pages/wishlist.css";
export const Wishlist = () => {
  const { wishlistState } = useWishlist();
  return (
    <>
      <NavBar />
      <div className="search-container">
        <h1>Wishlist</h1>
      </div>
      <div className="wishlist-property-list">
        {wishlistState.length > 0 &&
          wishlistState.map((property) => (
            <PropertyCard key={property.id} propertyDetails={property} />
          ))}
      </div>
    </>
  );
};