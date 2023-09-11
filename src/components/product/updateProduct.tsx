import React, { ChangeEvent, FormEvent, useState } from "react";
import axiosConfig from "../../axiosConfig";
import { productModal } from "../../models";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [myData, setMyData] = useState<productModal[]>([]);
  const { id } = useParams<{ id: string }>();
  axiosConfig
    .get(`/detail/${id}`)
    .then(function (response) {
      setMyData(response.data);
    })
    .catch(function (error) {
      if (error.request.status === 404) {
        alert("Invalid Product ID");
      }
      console.log(error);
    });

  // ====== Load Data simply using Axios ======
  const [formData, setFormData] = useState<productModal>({
    title: "",
    price: 0,
    description: "",
    imageUrl: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axiosConfig.post("/add-record", formData);
      // .then((response) => {
      if (response.status === 200) {
        //setFormData({ title: "", price: 0, description: "", imageUrl: "" });
        console.log("Data Submited", response);
      } else {
        console.log("Failed to submit the form");
      }
      // })
      // .catch(function (error) {
      //   console.error("Error while submitting the form", error);
      // });
    } catch (error) {
      console.error("Error while submitting the form", error);
    }
  };

  return (
    <div>
      <h2>Update Product</h2>
      {/* ====== while simply using Axios ====== */}
      <form onSubmit={handleSubmit} action="">
        <div>
          <input
            type="text"
            name="title"
            placeholder="Product Name"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
            value={formData.description}
          />
          <input
            type="text"
            placeholder="Product Price"
            name="price"
            onChange={handleChange}
            value={formData.price}
          />
          <input
            type="text"
            placeholder="Product Image"
            name="imageUrl"
            onChange={handleChange}
            value={formData.imageUrl}
          />
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
