import React, { useContext, useEffect, useState } from "react"
import defaultApp from "../firebase"
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { addDoc, setDoc, doc, getFirestore, getDoc } from "firebase/firestore"

const auth = getAuth(defaultApp)
const db = getFirestore(defaultApp)
const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext)

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({})
  const [metaUser, setMetaUser] = useState()

  useEffect(() => {
    let sub = true

    const unsub = onAuthStateChanged(auth, (userCreds) => {
      if (sub) {
        setMetaUser(userCreds)
      }
    })

    return () => {
      sub = false
      unsub()
    }
  }, [])

  async function signup(_email, password, _journalName) {
    const user = await createUserWithEmailAndPassword(auth, _email, password)
    console.log(user)
    const userDocInfo = {
      email: _email,
      journalName: _journalName,
    }
    await setDoc(doc(db, "users", user.user.uid), userDocInfo)

    // return createUserWithEmailAndPassword(auth, _email, password)
  }

  async function login(email, password) {
    const userAuth = await signInWithEmailAndPassword(auth, email, password)
    const userDocRef = doc(db, "users", userAuth.user.uid)
    const userDocSnap = await getDoc(userDocRef)

    return userDocSnap.exists() ? userDocSnap : console.log("no user created")
  }

  const value = {
    signup,
    login,
    setUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
