import { AuthContextProvider } from "./contexts/AuthContext"
import { Route, Routes } from "react-router-dom"
import Signup from "./components/auth/Signup"
import { Theme } from "./contexts/Theme"
import { Toaster } from "react-hot-toast"
import Login from "./components/auth/Login"
function App() {
  return (
    <div className="App" style={{ minHeight: "100vh", height: "100vh" }}>
      <AuthContextProvider>
        <Theme>
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                fontFamily: "Inter, sans-serif",
              },
            }}
          />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Theme>
      </AuthContextProvider>
    </div>
  )
}

export default App
