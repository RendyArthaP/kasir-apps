import React, {useState} from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getDataUsers } from '../redux/actions/User.GetUser.Actions';

const Login = () => {
  const userList = useSelector((state) => state.handleUsers)
  const dispatch = useDispatch()
  const history = useHistory()
  const toOrder = () => history.push("/kasir-app")
  const [isLogin, setIsLogin] = useState(false)
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setUserLogin({
      ...userLogin,
      [name]: value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(getDataUsers(userLogin, {toOrder}))
    setUserLogin({
      email:"",
      password:""
    })
  }
  return (
    <Container>
      <Form 
        className="pt-4"
        onSubmit={handleLogin}
      >
        <h1 className="text-center">Login Kasir-App</h1>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            onChange={handleChange}
            value={userLogin.email}
            name="email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password"
            onChange={handleChange}
            value={userLogin.password}
            name="password"
          />
        </Form.Group>
        <Button 
          variant="primary" 
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Login
