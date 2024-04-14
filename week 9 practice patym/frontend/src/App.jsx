import { BrowserRouter, Route, Routes,} from "react-router-dom"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"


function App() {



  return (
    
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin></Signin>}/>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}/>
        <Route path="/send" element={<SendMoney></SendMoney>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
