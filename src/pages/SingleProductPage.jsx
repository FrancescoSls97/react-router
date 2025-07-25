
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function SingleProduct() {
    const { id } = useParams();
    //const apiUrl = `https://fakestoreapi.com/products/${id}`;
    const [product, setProduct] = useState({});

useEffect(() => {
   fetch("https://fakestoreapi.com/products/")
  .then(res=>res.json())
  .then(data => {
    console.log(data);
    setProduct(data)})
}, [id])



    return (
      
      
      <div className="container">
        <div className="card">
          <h3>{`${product.title}`}</h3>
        </div>
      </div>
      
      
    )
}
