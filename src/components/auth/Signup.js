import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [journalName, setJournalName] = useState("")
  const [loading, setLoading] = useState(false)
  const logoSrc = process.env.PUBLIC_URL + "/AuthLogo.png"
  const navigate = useNavigate()
  const { signup } = useAuth()

  function handleSubmit(e) {
    e.preventDefault()
    const toastId = toast.loading("Loading..")
    signup(email, password, journalName)
      .then((res) => {
        setLoading(false)
        toast.success("Account created!", {
          id: toastId,
        })
        navigate("/login")
      })
      .catch((err) => {
        console.log(err)
        toast.error("something went wrong", {
          id: toastId,
        })
      })
  }
  return (
    <AuthContainer>
      <AuthTitle>
        <img src={logoSrc} alt="NoteBook" />

        <h1>field notes</h1>
      </AuthTitle>
      <AuthCard>
        <Legend>SIGN-UP</Legend>
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
          <InputGroup>
            <label htmlFor="confirmPassword">cofirm password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="journalName">journal name</label>
            <input
              type="journalName"
              name="journalName"
              id="journalName"
              required
              onChange={(e) => setJournalName(e.target.value)}
              value={journalName}
            />
          </InputGroup>

          <StyledCardText>
            have an account? <Link to="/signup">login!</Link>
          </StyledCardText>

          <AuthBtn type="submit">Signup</AuthBtn>
        </form>
      </AuthCard>
    </AuthContainer>
  )
}

export const AuthContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.authBg};
`

export const AuthCard = styled.fieldset`
  max-width: 23rem;
  width: 100%;
  border: solid 1px black;
  padding: 2rem;
  margin-top: 2rem;
  /* background-color: blue; */
`

export const InputGroup = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin-bottom: 1rem;
    text-transform: capitalize;
    font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
  }

  input {
    border: none;
    border-bottom: 2px dotted black;
    background: none;
  }
`

export const StyledCardText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
  color: ${({ theme }) => theme.colors.subText};
  font-size: 1rem;
  text-transform: uppercase;

  a {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const Legend = styled.legend`
  font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 2rem;
  padding: 0 2rem;
`

export const AuthTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
  display: flex;

  h1 {
    width: min-content;
    text-transform: uppercase;
  }

  img {
    width: 60px;
    object-fit: contain;
  }
`

export const AuthBtn = styled.button`
  border: solid 1px black;
  font-weight: 700;
  background: none;
  text-transform: uppercase;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 200ms ease;

  &:hover {
    background-color: black;
    color: white;
  }
`
