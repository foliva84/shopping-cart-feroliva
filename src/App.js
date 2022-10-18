import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import { Container } from "react-bootstrap";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Containers/ItemListContainer";

function App() {
  const pages = [
    { id: 1, text: "Inicio", path: "./", active: true },
    { id: 2, text: "Shop", path: "./shop", active: false },
    { id: 3, text: "Contacto", path: "./contacto", active: false }
  ];

  let saludo = "Las mejores ofertas!!!";

  return (
    <>
      <Container>
        <Navbar storeName="Supermarket" pages={pages} />
        <ItemListContainer greeting={saludo} />
      </Container>
    </>
  );
}

export default App;
