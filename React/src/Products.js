import { useEffect, useState } from "react";

export const Products = () => {
  const [products, setProducts] = useState([]);

  const API_URL = "https://dummyjson.com/products";
  
  const fetchAndSetProducts = async () => {
    try {
      const response = await fetch(API_URL);
      const ApiRes = await response.json();
      let products = [];
      if (ApiRes) {
        products = ApiRes.products;
        if (products.length) {
          setProducts((initProducts) => products);
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    fetchAndSetProducts();
  }, []);
  
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Image</th>
        </tr>

        {products.length != 0 &&
          products.map((product) => (
            <tr>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>
                <img src={product.thumbnail} />
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};
