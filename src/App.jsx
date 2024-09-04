import "./App.css"
import { useState, useEffect } from "react"
import { postJoke, getAllJokes } from "./services/jokeService"
import stevePic from "./assets/steve.png"


export const App = () => {
  const [userInput, setUserInput] = useState('')
  const [allJokes, setAllJokes] = useState([])
  const [toldJokes, setToldJokes] = useState([])
  const [untoldJokes, setUntoldJokes] = useState([])


  useEffect(() => {
    getAllJokes().then(jokesArray => {
      setAllJokes(jokesArray)
    })}, [allJokes])

  useEffect(() => {
    setToldJokes(allJokes.filter(joke => joke.told))
  }, [])

  useEffect(() => {
    setUntoldJokes(allJokes.filter(joke => !joke.told))
  }, [])

const fetchJokes = () => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray);
    });
  };
const handlePostJoke = () => {
  postJoke(userInput).then(() => {
    setUserInput('')
    fetchJokes()
  })
}
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
    <button className='joke-input-submit'
    onClick={handlePostJoke}
    >Post Joke</button>
    </section>
    <div className='joke-lists-container'>
      <div className='joke-list-container'>
        <h2>Untold<span className='untold-count'>{untoldJokes.length}#</span></h2>
        {untoldJokes.map(joke => {
          return (
            <div className='joke-list-item' key={joke.id}>{joke.text}</div>
          )
        })}
      </div>
      <div className='joke-list-container'>
        <h2>Told<span className='told-count'>{toldJokes.length}#</span></h2>
        {toldJokes.map(joke => {
          return (
            <div className='joke-list-item' key={joke.id}>{joke.text}</div>
          )
        })}
      </div>
    </div>
  </main>
  )
}

