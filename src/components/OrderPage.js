import React from 'react'
import { Button, Container } from 'react-bootstrap'

const OrderPage = ({itemList}) => {
  const itemPrice = itemList.reduce((accumulation, currentItem) => 
    accumulation + currentItem.hargaBarang * currentItem.jumlahBarang, 0
  ) 

  const subtotalItem = (item) => {
    const calculation = item.hargaBarang * item.jumlahBarang
    return calculation
  }

  return (
    <div>
      <Container className="py-4">
        <h1 className="align-items-center text-center">List barang</h1>
        {itemList.map((items) => (
          <div 
            key={items.id}
            className="border p-2 my-3"
          >
            <div className="">
              <h5>Nama barang:</h5>
              <p className="">{items.namaBarang}</p>
            </div>    
            <div>
              <h5>Jumlah barang: </h5>
              <p>{items.jumlahBarang} Unit</p>
            </div>
            <div>
              <h5>Harga barang:</h5>
              <p>Rp.{items.hargaBarang}</p>
            </div>
            <div>
              <h5>Rincian:</h5>
              <p>Rp.{items.hargaBarang} X {items.jumlahBarang} Unit</p>
            </div>
            <div>
              <h5>Subtotal / Item</h5>
              <p>Rp.{subtotalItem(items)}</p>
            </div>
          </div>
        ))}
        {itemList.length > 0 && (
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
