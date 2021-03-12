import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getDataUsers } from '../redux/actions/User.GetUser.Actions';
import Success from "../components/alerts/Success";
import Error from "../components/alerts/Error";

const Login = () => {
  const [errorAlert, setErrorAlert] = useState(false)
  const [errorContent, setErrorContent] = useState("")
  const [successAlert, setSuccessAlert] = useState(false)
  const [successContent, setSuccessContent] = useState("")
  const dispatch = useDispatch()
  const history = useHistory()
  const directedToHome = () => history.push("/kasir-app")
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
    if(userLogin.email === "" || userLogin.password === "") {
      setErrorAlert(true)
      setErrorContent("Silahkan input data anda dengan lengkap!")
      setTimeout(() => {
        setErrorAlert(false)
      }, 2000)
    } else {
      dispatch(getDataUsers(
        userLogin, 
        {directedToHome},
        setSuccessAlert,
        setSuccessContent,
        setErrorAlert,
        setErrorContent
      ))
      setUserLogin({
        email:"",
        password:""
      })
    }
  }
  return (
    <Container>
      <Form 
        className="pt-4"
        onSubmit={handleLogin}
      >
        <h1 className="text-center">Login Kasir-App</h1>
        {successAlert && <Success successContent={successContent}/>}
        {errorAlert && <Error errorContent={errorContent}/>}
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
