import './App.css';
import { Routes , Route  } from 'react-router-dom'
import Header from './component/Home/Header';
import Login from './component/Home/Login';
import Footer from './component/Home/Footer';
import SignUp from './component/Home/SignUp';
import Home from './component/Home/Home';
import Services from './component/Home/Services';
import ProductDetail from './component/Pages/ProductDetail';
import RequireAuth from './component/Pages/RequireAuth';
import NotFound from './component/Pages/NotFound';
import ManageProduct from './component/Pages/ManageProduct';
import AddProduct from './component/Pages/AddProduct';
import MyProduct from './component/Pages/MyProduct';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/service' element={<Services></Services>}></Route>
        <Route path='/service/:productId' element={<RequireAuth>
          <ProductDetail></ProductDetail>
        </RequireAuth>}></Route>
        <Route path='/manageProduct' element={<RequireAuth>
          <ManageProduct></ManageProduct>
        </RequireAuth>}></Route>
        <Route path='/addProduct' element={<RequireAuth>
          <AddProduct></AddProduct>
        </RequireAuth>}></Route>
        <Route path='/myProduct' element={<RequireAuth>
          <MyProduct></MyProduct>
        </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
