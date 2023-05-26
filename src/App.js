import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {
  
  const[number, setnumber] = useState(1)
  const[name, setName] = useState()
  const[moves, setMoves] = useState()

  useEffect(()=>{
    async function getData(){
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
        const actualdata = await res.json()
        setName(actualdata.species.name)
        setMoves(actualdata.moves.length)
  }

  getData()
  })
  
 
  return (
    <>
    <h1 className="text-center medium--dark">Pokemon Game</h1>
    
    <br></br>
    
    <br/><br/><br/>
    <div className='selectbox'>
      <h2><div className='selectiondesc text-center'>Select The Pokemon ID</div></h2>
    <select className='choose' value = {number} onChange={(event)=>{setnumber(event.target.value)}}>
      <option className='1'>1</option>
      <option className='2'>2</option>
      <option className='3'>3</option>
      <option className='4'>4</option>
      <option className='5'>5</option>
      <option className='1'>6</option>
      <option className='2'>78</option>
      <option className='3'>32</option>
      <option className='4'>25</option>
      <option className='5'>190</option>
 
    </select>
    
    </div>


    <div className='poke'>
    <h3 className='desc1 text-center'>You have chosen id number {number}.</h3>
    <br></br>
    <h3 className='desc1 text-center'>The Pokemon at {number} is {name}!</h3>
    <br></br>
    <h3 className='desc1 text-center'>{name} has {moves} number of special moves.</h3>
    </div>
    </>
  );
}


export default App;
