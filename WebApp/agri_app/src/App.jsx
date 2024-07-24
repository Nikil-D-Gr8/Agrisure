import './App.css'
import dashboard from './Components/dashboard'
import Signin from './Components/login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import main from './Components/main'



function App() {

return (
<BrowserRouter>
    <Routes>
      <Route path='/' Component={Signin}> </Route>
      <Route path='/main' Component={main}></Route>
      </Routes>
</BrowserRouter>
)
}

export default App