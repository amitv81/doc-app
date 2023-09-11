import React, { useEffect, useState } from "react";
import axiosConfig from "../../axiosConfig";
import { productModal } from "../../models";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  // ====== Load Data simply using Axios ======
  const [myData, setMyData] = useState<productModal[]>([]);
  const loadData = () => {
    axiosConfig
      .get("/products")
      .then(function (response) {
        setMyData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // ====== Function to handle delete product ======
  const handleDelete = (productId: number | undefined) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) {
      return; // If the user cancels, do nothing
    }
    axiosConfig
      .delete(`/del-record/${productId}`)
      .then(function (response) {
        loadData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Function to show single product detail
  const showDetail = (productId: number | undefined) => {
    navigate(`/detail/${productId}`);
  };

  // Function to update product
  const handleUpdate = (productId: number | undefined) => {
    navigate(`/update-product/${productId}`);
  };

  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  return (
    <div>
      Product List
      {/* ====== while simply using Axios ====== */}
      <div>
        {myData.map((productData, id) => (
          <div key={id}>
            {productData.id}. {productData.title} -{" "}
            <button onClick={() => showDetail(productData.id)}>
              Show Detail
            </button>{" "}
            | &nbsp;
            <button onClick={() => handleUpdate(productData.id)}>Update</button>
            | &nbsp;
            <button onClick={() => handleDelete(productData.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
