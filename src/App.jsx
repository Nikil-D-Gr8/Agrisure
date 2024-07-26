import './App.css'
import Signin from './Components/login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import main from './Components/main'
import premium from './Components/premium'



function App() {

return (
<BrowserRouter>
    <Routes>
      <Route path='/' Component={Signin}> </Route>
      <Route path='/main' Component={main}></Route>
      <Route path='/premium' Component={premium}></Route>
      </Routes>
</BrowserRouter>
)
}

export default App