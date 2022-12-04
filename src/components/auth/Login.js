import React from "react"
import { useState } from "react"
import {
  Legend,
  AuthBtn,
  AuthTitles,
  StyledCardText,
  InputGroup,
  AuthCard,
  AuthContainer,
  AuthTitle,
} from "./Signup"

import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const logoSrc = process.env.PUBLIC_URL + "/AuthLogo.png"
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, setUser } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const toastId = toast.loading("Loading...")
    login(email, password)
      .then((res) => {
        setUser(res)
        toast.success("Logged In", {
          id: toastId,
        })
        navigate("/")
      })
      .catch((err) => {
        toast.error("something went wrong", {
          id: toastId,
        })
        console.log(err)
      })
  }

  return (
    <AuthContainer>
      <AuthTitle>
        <img src={logoSrc} alt="NoteBook" />

        <h1>field notes</h1>
      </AuthTitle>
      <AuthCard>
        <Legend>LOG-IN</Legend>

        <form action="" onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </InputGroup>

          <StyledCardText>
            dont have an account? <Link to="/signup">Signup!</Link>
          </StyledCardText>

          <AuthBtn type="submit">Login</AuthBtn>
        </form>
      </AuthCard>
    </AuthContainer>
  )
}
