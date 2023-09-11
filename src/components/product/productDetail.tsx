import { useState } from "react";
import axiosConfig from "../../axiosConfig";
import { productModal } from "../../models";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ProductDetail = () => {
  const navigate = useNavigate();
  // ====== Load Data simply using Axios ======
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

  // Function to go back to previous screen(Listing screen)
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      Product List
      {/* ====== while simply using Axios ====== */}
      <div>
        {myData.map((productData, id) => (
          <div key={id}>
            Product Name: {productData.title} <br />
            Price: {productData.price}
            <br />
            Description: {productData.description}
            <br />
            Image: {productData.imageUrl}
            <br />
            <button onClick={() => handleBack()}>Show Product List</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
