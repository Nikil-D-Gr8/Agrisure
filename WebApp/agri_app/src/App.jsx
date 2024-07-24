import './App.css'
import dashboard from './Components/dashboard'
import login from './Components/login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'



function App() {

return (
<BrowserRouter>
    <Routes>
      <Route path='/' Component={login}> </Route>
      <Route path='/dashboard' Component={dashboard}></Route>
      </Routes>
</BrowserRouter>
)
}

export default App