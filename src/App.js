import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
// import { Container } from "react-bootstrap";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Containers/CartView/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar storeName="Supermarket" />
        <Routes>
          <Route path="/" element={<ItemListContainer />}  />
          <Route path="/categoria/:id" element={<ItemListContainer />}/>
          <Route path="/producto/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart/" element={<Cart />}/> 
          <Route path="*" element={<ItemListContainer />}/> 
        </Routes>
      </BrowserRouter>
    </>
  );

  // return (
  //   <>
  //     <Container>
  //       <Navbar storeName="Supermarket" pages={pages} />
  //       <ItemListContainer greeting={saludo} />
  //       {/* <ItemDetailContainer /> */}
  //     </Container>
  //   </>
  // );
}

export default App;
