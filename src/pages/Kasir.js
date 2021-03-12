import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FormOrder from "../components/FormOrder";
import Menubar from "../components/Menubar";
import OrderPage from "../components/OrderPage";
import Success from "../components/alerts/Success";
import Error from "../components/alerts/Error";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../redux/actions/Order.HandleItem.Actions";
import { useHistory } from 'react-router-dom'

function Kasir() {
  const history = useHistory()
  const isLoggedIn = JSON.parse(localStorage.getItem("isLogin"))

  if(!isLoggedIn) {
    history.push("/")
  }
  const [values, setValues] = useState({
    namaBarang: "",
    jumlahBarang: "",
    hargaBarang: ""
  })
  const [successAlert, setSuccessAlert] = useState(false)
  const [errorAlert, setErrorAlert] = useState(false)
  const [errorContent, setErrorContent] = useState("")
  const [successContent, setSuccessContent] = useState("")

  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const itemList = useSelector((state) => state.handleItem)
  const dispatch = useDispatch()

  const handleDeleteItem = id => {
    dispatch(deleteItem(id))
  }

  const handleAddItem = (e, value) => {
    
    e.preventDefault();
    if(values.namaBarang === "" || values.jumlahBarang === "" || values.hargaBarang === "") {
      setErrorContent("Mohon isi form di bawah dengan lengkap")
      setErrorAlert(true)
      setSuccessAlert(false)
      setInterval(() => {
        setErrorAlert(false)
      }, 4000);
    } else if(values.jumlahBarang > "10") {
      setErrorContent("Maksimal jumlah per barang adalah 10 unit")
      setErrorAlert(true)
      setSuccessAlert(false)
      setInterval(() => {
        setErrorAlert(false)
      }, 4000);
    } else if(values.hargaBarang.length < 3) {
      setErrorContent("Harga yang anda masukkan salah, harga harus lebih dari Rp. 100") 
      setErrorAlert(true)
      setSuccessAlert(false)
      setInterval(() => {
        setErrorAlert(false)
      }, 4000);
    } else {
      dispatch(addItem(value))
      setSuccessContent("Data berhasil di input")
      setSuccessAlert(true)
      setInterval(() => {
        setSuccessAlert(false)
      }, 4000);
      setErrorAlert()
      setValues({
        namaBarang: "",
        jumlahBarang: "",
        hargaBarang: ""
      })
    }
  }
  console.log(itemList)
  useEffect(() => {}, [itemList])

  return (
    <div>
      <Menubar />
      <Container>
        <h1 className="align-items-center text-center">Kasir - Apps</h1>
        {successAlert && <Success successContent={successContent}/>}
        {errorAlert && <Error errorContent={errorContent}/>}
        <FormOrder 
          handleAddItem = {handleAddItem} 
          handleChange = {handleChange}
          values = {values}
        />
        <OrderPage 
          itemList = {itemList}
          handleDeleteItem = {handleDeleteItem}
        />
      </Container>
    </div>
  );
}

export default Kasir;
