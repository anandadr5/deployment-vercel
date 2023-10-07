import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  addProduct,
  updateProduct,
  deleteProduct,
} from "../utils/redux/actions/actions";
import "../styles/index.css";
import bootstrapLogo from "../assets/bootstrap-logo.png";
import { article } from "../utils/constants/article";
import { Link } from "react-router-dom";

const CreateProduct = (props) => {
  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    productImage: "",
    freshRadio: "",
    description: "",
    productPrice: "",
  });

  const [tableData, setTableData] = useState([]); // State menyimpan data ke table
  const [language, setLanguage] = useState("id"); // State language
  const [confirmDelete, setConfirmDelete] = useState(false); // State untuk mengkonfirmasi penghapusan data
  const [deleteIndex, setDeleteIndex] = useState(null); // State untuk menghapus data
  const [editIndex, setEditIndex] = useState(null); // State untuk menyimpan data yang ingin diedit
  const [editData, setEditData] = useState(formData); // State untuk mengedit data
  const [imageFile, setImageFile] = useState(null);
  const [productImage, setProductImage] = useState(""); // State untuk menyimpan URL gambar
  const [selectedFreshness, setSelectedFreshness] = useState(""); // State untuk menyimpan data Product Freshness yang dipilih

  // Menampilkan Alert Welcome
  useEffect(() => {
    alert("Welcome");
  }, []);

  // Fungsi untuk perubahan nilai input Product Name
  const handleProductNameChange = (event) => {
    const updatedFormData = { ...formData, productName: event.target.value };
    setFormData(updatedFormData);
  };

  // Fungsi untuk perubahan nilai input Product Image
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Mengambil file yang diunggah
    setImageFile(file);
    setProductImage(URL.createObjectURL(file)); // Menyimpan URL gambar dalam state
  };

  // Fungsi untuk perubahan nilai input Product Freshness
  const handleFreshnessChange = (event) => {
    const value = event.target.value; // Mengambil data freshness yang dipilih
    setSelectedFreshness(value); // Menyimpan data Product Freshness dalam state
  };

  // Validasi Product Name
  function validateProductName() {
    const productName = formData.productName.trim();

    // Validasi Product Name tidak boleh kosong
    if (productName === "") {
      alert("Please enter a valid Product Name.");
      return false;
    }

    // Validasi Product Name tidak mengandung simbol
    const regex = /^[a-zA-Z0-9\s]+$/; // Hanya huruf, angka, dan spasi diizinkan
    if (!regex.test(productName)) {
      alert("Product Name must not contain symbols.");
      return false;
    }

    // Membatasi inputan 25 karakter dan memberi alert ketika melebihi 25 karakter
    if (productName.length > 25) {
      alert("Last Name must not exceed 25 characters.");
      return false;
    }

    return true;
  }

  // Validasi Product Price
  function validateProductPrice() {
    const productPrice = formData.productPrice.trim();

    // Validasi Product Price tidak boleh kosong
    if (productPrice === "") {
      alert("Please enter a valid Product Price.");
      return false;
    }

    const regex = /^\d+(\.\d{1,2})?$/;
    if (!regex.test(productPrice)) {
      alert("Product Price must be a valid number.");
      return false;
    }

    return true;
  }

  // Validasi form
  const validateForm = () => {
    // Dapatkan nilai dari formData
    const {
      productName,
      productCategory,
      productImage,
      freshRadio,
      description,
      productPrice,
    } = formData;

    // Validasi Product Name
    if (!validateProductName()) {
      document.getElementById("productname").style.border = "1px solid red"; // Menambahkan border merah
      return false;
    } else {
      document.getElementById("productname").style.border = ""; // Menghapus border merah jika valid
    }

    // Validasi Product Category
    if (productCategory === "Choose...") {
      alert("The Product Category field must be filled in");
      document.getElementById("productcategory").style.border = "1px solid red"; // Menambahkan border merah
      return false;
    } else {
      document.getElementById("productcategory").style.border = ""; // Menghapus border merah jika valid
    }

    // Validasi Product Image
    if (productImage.trim() === "") {
      alert("The Product Image field must be filled in");
      document.getElementById("productimage").style.border = "1px solid red"; // Menambahkan border merah
      return false;
    } else {
      document.getElementById("productimage").style.border = ""; // Menghapus border merah jika valid
    }

    // Validasi Product Freshness
    var freshRadios = document.getElementsByName("freshRadio");
    var freshRadioSelected = false;
    for (var i = 0; i < freshRadios.length; i++) {
      if (freshRadios[i].checked) {
        freshRadioSelected = true;
        break;
      }
    }

    if (!freshRadioSelected) {
      alert("The Product Freshness field must be filled in");
      return false;
    }

    // Validasi Additional Description
    if (description.trim() === "") {
      alert("The Additional Description field must be filled in");
      document.getElementById("description").style.border = "1px solid red"; // Menambahkan border merah
      return false;
    } else {
      document.getElementById("description").style.border = ""; // Menghapus border merah jika valid
    }

    // Validasi Product Price
    if (!validateProductPrice()) {
      alert("The Product Price field must be filled in");
      document.getElementById("productprice").style.border = "1px solid red"; // Menambahkan border merah
      return false;
    } else {
      document.getElementById("productprice").style.border = ""; // Menghapus border merah jika valid
    }

    displayFormData();
    return false;
  };

  // Function Untuk Melakukan penginputan data kedalam table
  const addProductToTable = (event) => {
    event.preventDefault();

    // Validasi Product Name
    if (!validateProductName()) {
      return;
    }

    // Deklarasi Variable untuk mengambil Value inputan dari form
    const newProduct = {
      productName: formData.productName,
      productCategory: formData.productCategory,
      productImage: formData.productImage,
      freshRadio: formData.freshRadio,
      productPrice: formData.productPrice,
      id: Date.now(),
    };

    props.addProduct(newProduct);

    setFormData({
      productName: "",
      productCategory: "",
      productImage: "",
      freshRadio: "",
      description: "",
      productPrice: "",
    });

    // Menambah data
    setTableData([...tableData, newProduct]);

    setFormData({
      productName: "",
      productCategory: "",
      productImage: "",
      freshRadio: "",
      description: "",
      productPrice: "",
    });
  };

  // Fungsi untuk memperbaharui form sebagai respons terhadap perubahan pada input form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  // Fungsi untuk menampilkan angka acak di console
  const displayRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log("Random Number:", randomNumber);
  };

  // Fungsi untuk menampilkan konfirmasi delete
  const showConfirmDelete = (index) => {
    setConfirmDelete(true);
    setDeleteIndex(index);
  };

  // Fungsi untuk menghapus data dari table
  const deleteProduct = () => {
    if (deleteIndex !== null) {
      const updateTableData = [...tableData];
      updateTableData.splice(deleteIndex, 1);
      setTableData(updateTableData);
      setConfirmDelete(false);
    }
  };

  // Fungsi untuk membatalkan penghapusan data
  const cancelDelete = () => {
    setConfirmDelete(false);
  };

  // Fungsi untuk menampilkan data yang akan diedit
  const loadEditData = (index) => {
    const dataToEdit = tableData[index];
    setEditData(dataToEdit);
    setEditIndex(index);
  };

  // Fungsi untuk mengupdate data
  const updateProduct = () => {
    if (editIndex !== null) {
      const updatedTableData = [...tableData];
      updatedTableData[editIndex] = editData;
      setTableData(updatedTableData);
      setEditData({
        productName: "",
        productCategory: "",
        productImage: "",
        freshRadio: "",
        description: "",
        productPrice: "",
      });
      setEditIndex(null);
    }
  };

  return (
    <div className="create-product">
      <div className="frame-15">
        {/* Penambahan Navbar */}
        <div className="text-simple">Simple header</div>
        <div className="nav-pills">
          <div className="nav-tab">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              <div className="active">Home</div>
            </button>
          </div>
          <div className="nav-tab">
            <Link to="/">Landing Page</Link>
          </div>
          <div className="nav-base-wrapper">
            <div className="nav-base-2">
              <div className="active-2">Features</div>
            </div>
          </div>
          <div className="nav-base-wrapper">
            <div className="nav-base-2">
              <div className="active-2">Pricing</div>
            </div>
          </div>
          <div className="nav-base-wrapper">
            <div className="nav-base-2">
              <div className="active-2">FAQs</div>
            </div>
          </div>
          <div className="nav-base-wrapper">
            <div className="nav-base-3">
              <div className="active-2">About</div>
            </div>
          </div>
        </div>
        <div className="main">
          {/* Penambahan icon Bootstrap */}
          <div className="div-2">
            <img src={bootstrapLogo} alt="logo" className="logo-bs" />
            <div className="text-create">{article.title[language]}</div>
            <p className="text-below">{article.description[language]}</p>
            <button onClick={() => setLanguage(language == "id" ? "en" : "id")}>
              Ubah
            </button>
          </div>
          <div className="div-wrapper">
            <div className="div-3">
              <div className="text-wrapper-3">Detail Product</div>
              <div className="form">
                {/* Membuat Form Data */}
                <form
                  className="createProduct"
                  name="dataProduct"
                  onSubmit={validateForm}
                >
                  <div className="div-4">
                    <div className="div-5">
                      {/* Membuat Form Product Name*/}
                      <div className="text-wrapper-4" htmlFor="productname">
                        Product name
                      </div>
                      <div className="input-name">
                        <input
                          type="text"
                          id="productname"
                          name="productName"
                          placeholder="Product Name"
                          onChange={handleInputChange}
                          value={editData ? editData.productName : ""}
                        />
                      </div>
                    </div>
                    <div className="div-6">
                      {/* Membuat Form Product Category */}
                      <div className="text-wrapper-4">Product Category</div>
                      <div className="select">
                        <select
                          name="productCategory"
                          id="productcategory"
                          value={editData ? editData.productCategory : ""}
                          onChange={handleInputChange}
                        >
                          <option>Choose...</option>
                          <option>Kecantikan</option>
                          <option>Pakaian</option>
                        </select>
                      </div>
                    </div>
                    <div className="div-6">
                      {/* Membuat Form Upload Product Image */}
                      <div className="text-wrapper-4" htmlFor="productimage">
                        Image of Product
                      </div>
                      <div className="button-button-group">
                        <input
                          type="file"
                          id="productimage"
                          name="productimage"
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="div-8">
                      {/* Membuat Button Radio Kondisi Product*/}
                      <div className="text-wrapper-4">Product Freshness</div>
                      <div className="frame-2">
                        <input
                          type="radio"
                          name="freshRadio"
                          id="brandRadio"
                          value="Brand New"
                          checked={formData.freshRadio === "Brand New"}
                          onChange={handleInputChange}
                        />{" "}
                        Brand New <br />
                        <input
                          type="radio"
                          name="freshRadio"
                          id="secondRadio"
                          value="Second Hand"
                          checked={formData.freshRadio === "Second Hand"}
                          onChange={handleInputChange}
                        />{" "}
                        Second Hand <br />
                        <input
                          type="radio"
                          name="freshRadio"
                          id="refufRadio"
                          value="Refurbished"
                          checked={formData.freshRadio === "Refurbished"}
                          onChange={handleInputChange}
                        />{" "}
                        Refufbished <br />
                      </div>
                    </div>
                    <div className="div-9">
                      {/* Membuat Input Deskripsi Product */}
                      <div className="text-wrapper-7">
                        Additional Description
                      </div>
                      <div className="input">
                        <textarea
                          name="description"
                          id="description"
                          cols={30}
                          rows={5}
                        />
                      </div>
                    </div>
                    <div className="div-8">
                      {/* Membuat Form Input Harga Product */}
                      <div className="text-wrapper-4">Product Price</div>
                      <div className="input-address">
                        <div className="element-wrapper">
                          <input
                            type="number"
                            name="productPrice"
                            id="productprice"
                            placeholder="$1"
                            value={editData ? editData.productPrice : ""}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="center-button">
                    {/* Membuat Button Submit, Random Number, Update */}
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      type="submit"
                      id="submitButton"
                      onClick={addProductToTable}
                    >
                      <div className="text-wrapper-8">Submit</div>
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      type="submit"
                      onClick={displayRandomNumber}
                    >
                      <div className="text-wrapper-8">Random Number</div>
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      type="button"
                      onClick={updateProduct}
                    >
                      <div className="text-wrapper-8">Update Data</div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Membuat Text List Product */}
        <div className="frame-27">
          <div className="text-list">List Product</div>
        </div>
        <div className="tabel">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead>
              <tr>
                {/* Untuk Membuat Head dari Table */}
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Product Image</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Product Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.productName}</td>
                  <td>{product.productCategory}</td>
                  <td>
                    {/* Menampilkan product image */}
                    <img src={product.productImage} alt="Product Image" />
                  </td>
                  <td>{product.freshRadio}</td>
                  <td>{product.productPrice}</td>
                  <td>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      <Link to={`/DetailProduct/${index + 1}`}>Detail</Link>
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => showConfirmDelete(index)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => loadEditData(index)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{ display: confirmDelete ? "block" : "none" }}
          className="confirm-delete"
        >
          <p>Apakah Anda yakin ingin menghapus?</p>
          <div className="confirm-delete-buttons">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={deleteProduct}
            >
              Ya
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={cancelDelete}
            >
              Tidak
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addProduct,
  updateProduct,
  deleteProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);
