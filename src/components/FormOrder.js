import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const FormOrder = ({handleAddItem, values, handleChange}) => {
  return (
    <Container>
      <Form onSubmit={(e) => handleAddItem(e, values)}>
        <Form.Group>
          <Form.Label>Nama barang</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Masukkan nama barang..."
            name="namaBarang"
            onChange={handleChange}
            value={values.namaBarang}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Jumlah barang</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="0 unit"
            name="jumlahBarang"
            onChange={handleChange}
            value={values.jumlahBarang}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Harga barang</Form.Label>
          <Form.Control 
            type="number"
            placeholder="Rp. 0"
            name="hargaBarang"
            onChange={handleChange}
            value={values.hargaBarang}
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
