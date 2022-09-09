import "../styles/components/propertyCard.css";
import convertDateFormat from "../utilities/convertDateFormat";
import checkPropertyInWishlist from "../utilities/checkPropertyInWishlist";
import { useWishlist } from "../context/wishlist-context";
export const PropertyCard = ({ propertyDetails }) => {
  const {
    id,
    name,
    imgUrl,
    address,
    bedsQty,
    bathroomQty,
    propertyArea,
    rent,
    moveInDate,
    type,
  } = propertyDetails;
  const { wishlistState, dispatchWishlist } = useWishlist();
  console.log(wishlistState);
  return (
    <div className="property-card">
      <div className="card-img-box">
        <img className="property-card-img" src={imgUrl} alt={name} />
      </div>

      <div className="card-body">
        <p className="property-rent">
          ₹{rent}
          <span className="gray-color">/month</span>
        </p>
        <p className="property-name">{name}</p>
        <p className="address">{address}</p>
        <p className="availability-txt">
          Available from: {convertDateFormat(moveInDate)}
        </p>
        <p className="property-type-txt">{type}</p>
      </div>
      <i
        className="material-icons"
        id="favorite-icon"
        onClick={() =>
          checkPropertyInWishlist(wishlistState, id)
            ? dispatchWishlist({
                type: "REMOVE-FROM-WISHLIST",
                payload: propertyDetails,
              })
            : dispatchWishlist({
                type: "ADD-TO-WISHLIST",
                payload: propertyDetails,
              })
        }
      >
        {checkPropertyInWishlist(wishlistState, id)
          ? `favorite`
          : `favorite_border`}
      </i>
      <div className="card-bottom flex-align-center gap-5px">
        <div className="beds flex-align-center">
          <i className="material-icons">bed</i>
          {bedsQty} Beds
        </div>
        <div className="bathrooms flex-align-center">
          <i className="material-icons">bathroom</i>
          {bathroomQty} Bathrooms
        </div>
        <div className="area flex-align-center">
          <i className="material-icons">square_foot</i>
          {propertyArea}sq.ft
        </div>
      </div>
    </div>
  );
};
