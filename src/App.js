import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import FormOrder from "./components/FormOrder";
import OrderPage from "./components/OrderPage";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./redux/actions/Order.AddItem.Actions";

function App() {
  const itemList = useSelector((state) => state)
  const dispatch = useDispatch()

  console.log(itemList)
  const handleAddItem = (e, value) => {
    e.preventDefault();
    
    dispatch(addItem(value))
  }

  useEffect(() => {}, [itemList])

  return (
    <div className="d-flex ">
      <Container>
        <h1 className="align-items-center text-center">Kasir - Apps</h1>
        <FormOrder handleAddItem = {handleAddItem} />
        <OrderPage 
          itemList = {itemList}
        />
      </Container>
    </div>
  );
}

export default App;
