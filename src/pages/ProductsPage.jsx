import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function ProductsPage() {

  const [products, setProducts] = useState([])

  //fetch dati prodotti dall' API
  function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then(data => {
      console.log(data);
      setProducts(data)  
    });
  }

  useEffect(fetchProducts, [])

    return(
        <>

     <main>
      <section id="jumbo">
        <div className="p-5 mb-4 bg-warning rounded-3">
          <div className="container-fluid py-5 ">
            <h1 className="display-5 fw-bold">I NOSTRI PRODOTTI RUBATI</h1>
            <p className="col-md-8 fs-4">
              Abbiamo solo il meglio, si, quello degli altri però, non è niente di nostro, è tutto rubato per potervi offrire prezzi più bassi della concorrenza, saranno anche onesti, ma da loro paghi di più
            </p>
            <button className="btn btn-danger btn-lg" type="button">
              NO, NON SERVO ANCORA A NIENTE
            </button>
          </div>
        </div> 
      </section>
      <section id="products">
        <div className="container">
          <h2>ROBEH</h2>
        <p>Ecco una selezione dei nostri miglior prodotti rubati</p>
        <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-3">
          {products.map((product) =>(
            <div className="col">
              <div key={product.id} className="card h-100">
                <img className="img-card h-50"src={product.image} alt={product.title} />
                <div className="card-body">
                  <h5>{product.title}</h5>
                  <h4>{product.price}</h4>
                  <p>{product.category}</p>
                  <Link to="/products/:id" className="btn btn-primary">
                        Aggiungi al carrello
                      </Link>
                </div>
              </div>
            </div>
          ))};
        </div>
        </div>
      </section>
     </main>

        </>
    )
}