import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;