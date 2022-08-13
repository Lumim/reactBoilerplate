import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Landing from './modules/Landing'
const WebIndex=()=> {
  return (
     
        <Routes>
            <Route path='/' component={<Landing/>}/>
        </Routes>
    
  )
}

export default WebIndex