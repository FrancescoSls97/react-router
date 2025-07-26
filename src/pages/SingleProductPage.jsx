import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"

export default function SingleProductPage() {
  const {id} = useParams()
  const api_url = `https://fakestoreapi.com/products/${id}`
  const [product, setProduct] = useState({})

  useEffect(()=>{
    fetch(api_url)
    .then(res => res.json())
    .then(data => {

      setProduct(data)
    })
  },[])
  return (
    <div className="container">
      <div className="card">
        <img src={product.image} alt={product.title} className="card-top" />
        <div className="card-body">
          <h3 className="fs-3">{product.title}</h3>
          <p className="fs-3">Prezzo: {product.price}</p>
          <p className="fs-4">{product.description}</p>
          <button type="button" className="btn btn-primary"> Aggiungi al carrello <i class="fa-solid fa-cart-shopping"></i></button>
        </div>
      </div>
    </div>
  )
}