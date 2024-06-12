import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Product from './components/Product/Product'
import Signup from './components/Signup/Signup'
import Footer from './components/Footer/Footer'
import ProductDetails from './components/ProDetails/ProductDetails'
import Otp from './components/Otp/Otp'
import OtpLogin from './components/OtpLogin/OtpLogin'
import AddProduct from './components/AddProduct/AddProduct'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <Footer /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/products' element={<Product />} />
          <Route path='/addproduct' element={<AddProduct/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/otp' element={<Otp />} /> 
          <Route path='/productdetails/:id' element={<ProductDetails/>} />
          <Route path="/*" element={<h1>ERROR</h1>} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
