const checkPropertyInWishlist = (state, propertyId) => {
  let itemStatus = false;
  console.log(state, propertyId);
  if (state.length > 0) {
    state.forEach((item) =>
      item.id === propertyId ? (itemStatus = true) : itemStatus
    );
  }

  return itemStatus;
};

export default checkPropertyInWishlist;
