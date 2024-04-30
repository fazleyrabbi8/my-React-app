import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'

import Actor from './Actor'

function App() {

  const actors =[ 'Sakib ' , 'Riaz','Jashim','Razzak' ,'Rubel' , 'Hugh Jackman', 'Tom Cavannagh' , 'Grant Gustin' , 'Tom Hardy' ]
  
  
  
  return (
    <>
      <h1>Vite + React</h1>


      <Actor name= 'Bappa Raz'></Actor>

      {

        actors.map(actor =><Actor name={actor}></Actor>)
      }

      {/* <Todo task='learn React' isDone={false}></Todo>
      <Todo task='Learn Basics' isDone={true} ></Todo>
      <Todo task='Learn DSA' isDone={false} ></Todo>

 */}


      {/* <Device name='Laptop'></Device>
      <Device name='Mobile' price = '15k'></Device>


      <Person></Person>
      <Person></Person>
      <Developer></Developer> */}
    </>
  )
}





function Device({ name, price = '10k' }) {

  return (


    <h2> This Device is {name}  {price} price </h2>

  )


}

function Person() {

  const age = parseInt(Math.random() * 50)
  const Money = parseInt(Math.random() * 1000)
  return <h3 className='PersonCard' >I am a Person with  age: {age} and  {Money} Taka </h3>

}




function Developer() {

  const developerStyle = {

    marginTop: '100px',
    margin: '20px',
    padding: '10px',
    border: '2px solid yellow',
    borderRadius: '10px'
  }

  return (
    <div>

      <h1 style={developerStyle}>I am a Developer </h1>
    </div>

  )
}


export default App
