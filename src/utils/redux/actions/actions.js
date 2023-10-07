export const ADD_PRODUCT = "ADD_PRODUCT"; // Aksi untuk menambah produk
export const UPDATE_PRODUCT = "UPDATE_PRODUCT"; // Aksi untuk memperbarui produk
export const DELETE_PRODUCT = "DELETE_PRODUCT"; // Aksi untuk menghapus produk

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: productId,
});
