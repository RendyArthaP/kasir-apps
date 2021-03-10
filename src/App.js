import React, {useState} from "react";
import { Container } from "react-bootstrap";
import FormOrder from "./components/FormOrder";
import OrderPage from "./components/OrderPage";

function App() {
  const [values, setValues] = useState(
    {
      namaBarang: "",
      jumlahBarang: "",
      hargaBarang: ""
    }
  )

  const [listInputItem, setListInputItem] = useState([])

  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleAddItem = (e) => {
    e.preventDefault();
    if(values.namaBarang === "" || values.jumlahBarang === "" || values.hargaBarang === "") {
      alert("Please input your data")
    } else {
      console.log(values)
      setValues({
        namaBarang: "",
        jumlahBarang: "",
        hargaBarang: ""
      })
    }
  }

  return (
    <div className="d-flex ">
      <Container>
        <h1 className="align-items-center text-center">Kasir - Apps</h1>
        <FormOrder 
          values = {values} 
          handleChange = {handleChange}
          handleAddItem = {handleAddItem}
        />
        <OrderPage />
      </Container>
    </div>
  );
}

export default App;
