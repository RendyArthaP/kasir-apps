import React from 'react'
import { Button, Container } from 'react-bootstrap'

const OrderPage = ({listInputItem}) => {
  const itemPrice = listInputItem.reduce((accumulation, currentItem) => 
    accumulation + currentItem.price * currentItem.input, 0
  ) 

  const subtotalItem = (item) => {
    const calculation = item.price * item.input
    return calculation
  }

  return (
    <div>
      <Container className="py-4">
        <h1 className="align-items-center text-center">List barang</h1>
        {listInputItem.map((listItem) => (
          <div 
            key={listItem.id}
            className="border p-2 my-3"
          >
            <div className="">
              <h5>Nama barang:</h5>
              <p className="">{listItem.item}</p>
            </div>    
            <div>
              <h5>Jumlah barang: </h5>
              <p>{listItem.input} Unit</p>
            </div>
            <div>
              <h5>Harga barang:</h5>
              <p>Rp.{listItem.price}</p>
            </div>
            <div>
              <h5>Rincian:</h5>
              <p>Rp.{listItem.price} X {listItem.input} Unit</p>
            </div>
            <div>
              <h5>Subtotal / Item</h5>
              <p>Rp.{subtotalItem(listItem)}</p>
            </div>
          </div>
        ))}
        {listInputItem.length > 0 && (
          <div className="">
            <div className="d-flex">
              <h4>Total:</h4>
              <h5 className="mt-1 ml-1"> Rp.{itemPrice}</h5>
            </div>
            <Button>
              Submit
            </Button>
          </div>
        )}
      </Container>
    </div>
  )
}

export default OrderPage
