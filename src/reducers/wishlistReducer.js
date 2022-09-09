export const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD-TO-WISHLIST":
      return addToWishlist(state, payload);
    case "REMOVE-FROM-WISHLIST":
      return removeFromWishlist(state, payload);
    default:
      return state;
  }
};

export const wishlistInitialState = [];

const addToWishlist = (state, payload) => {
  return [payload, ...state];
};
const removeFromWishlist = (state, payload) => {
  return state.filter((item) => item.id !== payload.id);
};

// const toggleWishlist = (state, payload) => {
//   let itemStatus = false;
//   let newWishlist = state;
//   state.map((item) =>
//     item.id === payload.id ? (itemStatus = true) : itemStatus
//   );

//   if (itemStatus) {
//     newWishlist = newWishlist.filter((item) => item.id !== payload.id); //remove from wishlist
//   } else {
//     newWishlist.concat(payload); //add to wishlist
//   }

//   return newWishlist;
// };
