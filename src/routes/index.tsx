import React from "react";
import { useRoutes } from "react-router-dom";
import ProductList from "../components/product/productList";
import AddProduct from "../components/product/addProduct";
import ProductDetail from "../components/product/productDetail";
import UpdateProduct from "../components/product/updateProduct";

const Index = () => {
  const routes = useRoutes([
    // {
    //   path: "/home",
    //   element: (<Home />),
    // },
    {
      path: "/products",
      element: <ProductList />,
    },
    {
      path: "/add-product",
      element: <AddProduct />,
    },
    {
      path: "/detail/:id",
      element: <ProductDetail />,
    },
    {
      path: "/update-product/:id",
      element: <UpdateProduct />,
    },
  ]);

  return routes;
};

export default Index;
