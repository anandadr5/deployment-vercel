import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "../actions/actions";

const initialState = {
  products: [],
};

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "UPDATE_PRODUCT":
      const updatedProduct = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.id === updatedProduct.id
      );

      if (productIndex !== -1) {
        const updatedProducts = [...state.products];
        updatedProducts[productIndex] = updatedProduct;

        return {
          ...state,
          products: updatedProducts,
        };
      }

      return state;
    case "DELETE_PRODUCT":
      const productIdToDelete = action.payload;
      const productIndexToDelete = state.products.findIndex(
        (product) => product.id === productIdToDelete
      );

      if (productIndexToDelete !== -1) {
        const updatedProducts = [...state.products];
        updatedProducts.splice(productIndexToDelete, 1);

        return {
          ...state,
          products: updatedProducts,
        };
      }

      return state;
    default:
      return state;
  }
};

export default productReducers;
