import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Top10 from './Top10'
import Random from './Random'
import Add from './Add'
import Menu from './Components/Menu'
import Total from './Components/Total'


function App() {
  const [items, setItems] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:4000/items`)
      .then((response) => {
        console.log('response', response)
        return(
          response.json()
        )
      })
      .then((data) => {
        console.log('return data', data)
        setItems(data)
      })
  }, [items])

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/random' element={<Random />}/>
        <Route path='/top10' element={<Top10 />}/>
        <Route path='/add' element={<Add />}/>
      </Routes>
    </>
  );
}

export default App;
