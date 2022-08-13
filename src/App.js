import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import WebIndex from './web/WebIndex';
import AdminIndex from './admin/AdminIndex';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="*" exact element={<WebIndex />}/>
          <Route path="" exact element={NotFound}/>
          
          <Route path="admin" exact element={<AdminIndex />}/>
      </Routes>
   </BrowserRouter>
  );
}

const NotFound=()=>{
  return(
      <>  
        <div>
          404 not found
        </div>
      </>

  )
}

export default App;
