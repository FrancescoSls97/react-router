import { useState } from 'react'


function App() {
  return (
    <>
     <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-light ">
        <div className="container p-2">
          <a className="navbar-brand" href="#">Ciccio Shop</a>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">Prodotti</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Chi Siamo </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>  
     </header>
    </>
  )
}
export default App
