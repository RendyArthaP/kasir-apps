import React, {useState} from "react";
import { Container } from "react-bootstrap";
import FormOrder from "./components/FormOrder";
import OrderPage from "./components/OrderPage";

function App() {
  const [listInputItem, setListInputItem] = useState([])
  const [values, setValues] = useState(
    {
      id: 0,
      namaBarang: "",
      jumlahBarang: "",
      hargaBarang: ""
    }
  )
  
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
    } else if(values.jumlahBarang > "10") {
        alert("Maksimal jumlah per barang adalah 10 unit")
    } else if(values.hargaBarang.length < 3) {
        alert("Harga yang anda masukkan salah") 
    } else {
        const newValues = {
          id: values.id,
          item: values.namaBarang,
          input: Number(values.jumlahBarang),
          price: Number(values.hargaBarang)
        }
        setListInputItem([...listInputItem, newValues])
        setValues({
          id: values.id + 1,
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
        <OrderPage 
          listInputItem = {listInputItem}
        />
      </Container>
    </div>
  );
}

export default App;
