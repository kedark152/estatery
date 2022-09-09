import { createContext, useContext, useReducer } from "react";
import {
  wishlistReducer,
  wishlistInitialState,
} from "../reducers/wishlistReducer";
const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [wishlistState, dispatchWishlist] = useReducer(
    wishlistReducer,
    wishlistInitialState
  );
  return (
    <WishlistContext.Provider value={{ wishlistState, dispatchWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
