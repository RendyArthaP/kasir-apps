import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const FormOrder = ({values, handleChange, handleAddItem}) => {
  return (
    <Container>
      <Form onSubmit={handleAddItem}>
        <Form.Group>
          <Form.Label>Nama barang</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Masukkan nama barang..."
            name="namaBarang"
            value={values.namaBarang}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Jumlah barang</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="0 unit"
            name="jumlahBarang"
            value={values.jumlahBarang}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Harga barang</Form.Label>
          <Form.Control 
            type="number"
            placeholder="Rp. 0"
            name="hargaBarang"
            value={values.hargaBarang}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default FormOrder
