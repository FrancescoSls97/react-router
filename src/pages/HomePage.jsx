import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {

  

    return(
        <>

     <main>
      <section id="jumbo">
        <div className="p-5 mb-4 bg-warning rounded-3">
          <div className="container-fluid py-5 ">
            <h1 className="display-5 fw-bold">GIALLO</h1>
            <p className="col-md-8 fs-4">
              Questo è un jumbotron d'esempio, stiamo ancora costruendo la pagina, quindi per ora non ci abbiamo ancora messo nulla, però è giallo, che bello il giallo, qui sotto ci sarà un bottone, non serve a nulla, per ora, ma comunque cè
            </p>
            <button className="btn btn-danger btn-lg" type="button">
              BOTTONE INUTILE
            </button>
          </div>
        </div> 
      </section>
      <section id="products">
        <div className="container">
          <h2>ROBEH</h2>
            <p>Ecco una selezione dei nostri miglior prodotti rubati</p>
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-3">
              <div className="col">
                <div className="card">
                  <img className='card-img-top' src="https://media.tenor.com/em-V0uVJQ6cAAAAe/yotobi-robe.png" alt="robe" />
                  <div className="cardbody">
                    ROBEH 999.999$
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img className='card-img-top' src="https://media.tenor.com/em-V0uVJQ6cAAAAe/yotobi-robe.png" alt="robe" />
                  <div className="cardbody">
                    ROBEH 999.999$
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img className='card-img-top' src="https://media.tenor.com/em-V0uVJQ6cAAAAe/yotobi-robe.png" alt="robe" />
                  <div className="cardbody">
                    ROBEH 999.999$
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img className='card-img-top' src="https://media.tenor.com/em-V0uVJQ6cAAAAe/yotobi-robe.png" alt="robe" />
                  <div className="cardbody">
                    ROBEH 999.999$
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img className='card-img-top' src="https://media.tenor.com/em-V0uVJQ6cAAAAe/yotobi-robe.png" alt="robe" />
                  <div className="cardbody">
                    ROBEH 999.999$
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
     </main>


        </>
    )
}