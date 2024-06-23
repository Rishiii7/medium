import { SignInComponent } from "./pages/SignIn"
import { Singup } from "./pages/Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { TestComponent } from "./pages/Test"


function App() {
  return (
    <>
      <div className=" text-indigo-600">
        <BrowserRouter >
        <Routes>
          <Route path="/signup" element={<Singup />}/>
          <Route path="/signin" element={<SignInComponent />}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
