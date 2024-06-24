import { SignInComponent } from "./pages/SignIn"
import { Singup } from "./pages/Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { TestComponent } from "./pages/Test"
import { HomePage } from "./pages/HomePage"
import { BlogPage } from "./pages/BlogPage"


function App() {
  return (
    <>
      <div className="">
        <BrowserRouter >
        <Routes>
          <Route path="/signup" element={<Singup />}/>
          <Route path="/signin" element={<SignInComponent />}/>
          <Route path="/test" element={<TestComponent />} />
          <Route path="/blog" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogPage/>} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
