export default function ProductsPage() {

    return(
        <>
              <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-light ">
        <div className="container p-2">
          <a className="navbar-brand" href="/">Ladro Shop</a>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/products" aria-current="page">Prodotti</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contacts">Chi Siamo </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>  
     </header>

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

     <footer className="bg-light text-center text-lg-start py-5 mt-5">
      <div className="container">
        <div className="row row-col-1 row-cols-md-3">
          <div className="col">
            <h3>Thief s.r.l</h3>
            <p>Rubiamo per il vostro risparmio</p>
            <p>Contattaci: info@robbery.com</p>
            <p>Account social rubati:</p>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Link utili</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>(IL)Legal</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookies Policy</a>
              </li>

            </ul>
          </div>
        </div>


        <div className="row row-cols-2 g-1 mt-5">

          <div className="col">
            <p className="">© Copyright {new Date().getFullYear()} </p>
          </div>
          <div className="col text-end">
            <div className="dropdown">
              <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                id="triggerId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Rapine Internazionali
              </button>
              <div className="dropdown-menu" aria-labelledby="triggerId">
                <a className="dropdown-item" href="#">English</a>
                <a className="dropdown-item" href="#">Spanish</a>
                <a className="dropdown-item" href="#">French</a>
                <h6 className="dropdown-header">Other Languages</h6>

              </div>
            </div>
          </div>
        </div>

      </div>

    </footer>
        </>
    )
}