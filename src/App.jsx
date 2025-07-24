import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
    {/*Browser Router per creare i collegamenti alle route*/}
      <BrowserRouter>
       {/* Componente Route che include le singole rotte*/}
       <Routes>
        {/* definizione delle singole rotte */}
        {/* la prima route sarà sempre l'index dell'app*/}
        <Route path="/" Component={HomePage}></Route>
        <Route path="/products" Component={ProductsPage}></Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
