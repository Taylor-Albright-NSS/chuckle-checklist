import "./App.css"
import { useState, useEffect } from "react"
import { postJoke } from "./services/jokeService"
import stevePic from "./assets/steve.png"


export const App = () => {
  const [userInput, setUserInput] = useState('')
  const [allJokes, setAllJokes] = useState([])
  const [untoldJokes, setUntoldJokes] = useState([])
  const [toldJokes, setToldJokes] = useState([])

  return (
  <main className='app-container'>
    <div className='app-heading'>

      <h1 className='app-heading-text'>Chuckle Checklist</h1>
      

      <div className='app-heading-circle'>
        <img className='app-logo' src={stevePic} alt='Good job Steve' />
      </div>

    </div>
    <h2>Add Joke</h2>
    
    <section className='joke-add-form'>
      <input type='text'
      className='joke-input'
      placeholder='New One Liner'
      value = {userInput}
      onChange={(event) => {
        setUserInput(event.target.value)
        console.log(event.target.value)
      }}></input>
    <div>{postJoke({ setUserInput }, {userInput})}</div>
    </section>
  </main>
  )
}

