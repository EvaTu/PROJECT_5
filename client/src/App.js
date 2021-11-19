import './App.css';
import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import { Switch, Route, useHistory} from 'react-router-dom'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import ShoppingCart from './components/ShoppingCart'
import ProductList from './components/ProductList'
import Home from './components/Home'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import News from './components/News'
import ProductDetail from './components/ProductDetail'
import AddProduct from './components/AddProduct'
import MyAccount from './components/MyAccount'

function App() {
  const history = useHistory()
  const [products, setProducts] = useState([])
  const [detailForm, setDetailForm] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const [newProductInput, setNewProduct] = useState(
    {name: '', cat: '', image: '', price: 0 , color: '', inventory: 0, description: '' }
    );
  

  

  useEffect(()=>{
    fetch("/api/me",{
      credentials: "include"
    })
    .then(res => {
      if(res.ok){
        res.json().then( user =>{
          setCurrentUser(user)
          
        })
      }
    })
  },[])

  useEffect(()=>{
    fetch("/api/products")
    .then(resp => resp.json())
    .then(data => setProducts(data))
  },[])

  function handelShoppingSub(event,selectNum,clickedPro){
    event.preventDefault()
    let orderInfo = {...clickedPro, select: selectNum}
    setDetailForm([...detailForm, orderInfo])
  }
 


  function handleProductSub(event){
    event.preventDefault()
    // setNewProduct(newProductInput)
    fetch("/api/products",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newProductInput)})
      .then(resp => resp.json())
      .then(() => setNewProduct({name: '', cat: '', image: '', price: 0, color: '', inventory: 0, description: ''}))
  }

  const handleLogout = () => {
    fetch("/api/logout", {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser([])
          history.push('/')
        }
      })
  }
  
  

  function onDelete(id){
    const updatedShopCart = detailForm.flat().filter(item=>(item.id !== id ))
    setDetailForm(updatedShopCart)
  }
  
  // console.log(currentUser)
  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/AddProduct">
          <AddProduct newProductInput={newProductInput} setNewProduct={setNewProduct} handleProductSub={handleProductSub} currentUser={currentUser}/>
        </Route>
        <Route path="/SignUp">
          <SignUp setCurrentUser={setCurrentUser}/>
        </Route>
        <Route path="/LogIn">
          <LogIn setCurrentUser={setCurrentUser}/>
        </Route>
        <Route path="/MyAccount">
          <MyAccount currentUser={currentUser} handleLogout={handleLogout}/>
        </Route>
        <Route path="/ShoppingCart">
          <ShoppingCart detailForm={detailForm} setDetailForm={setDetailForm} onDelete={onDelete} currentUser={currentUser}/>
        </Route>
        <Route path="/ProductList/:id">
          <ProductDetail handelShoppingSub={handelShoppingSub}/>
        </Route>
        <Route path="/ProductList">
          <ProductList products={products}/>
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/News">
          <News />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer currentUser={currentUser}/>
    </div>
  );
}

export default App;
