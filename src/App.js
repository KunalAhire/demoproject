import React from 'react'
import './App.css'
import About from './Components/About';
import { Vision } from './Components/Vision';
import { Nav } from './Components/Nav';
import { Mission } from './Components/Mission';
import Responcibility from './Components/Responcibility';
import Message from './Components/Message';
import { GroupComponyes } from './Components/GroupComponyes';
import { Footer } from './Components/Footer';
 const App = () => {
  return (
    <div>
      <Nav />
      <About />
      <Vision />
      <Mission />
      <Responcibility />
      <Message />
      <GroupComponyes />
      <Footer />
    </div>
  )
}
export default App;