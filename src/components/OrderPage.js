import React from 'react'
import { Button, Container } from 'react-bootstrap'

const OrderPage = ({listInputItem}) => {
  return (
    <div>
      <Container className="pt-4">
        <h1 className="align-items-center text-center">List barang</h1>
        {listInputItem.map((listItem) => (
          <div 
            key={listItem.id}
            className="border p-2"
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
              <p>{listItem.price}</p>
            </div>
          </div>
        ))}
        {listInputItem.length > 0 && (
          <div className="py-2">
            <h5>Total:</h5>
            <span></span>
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
