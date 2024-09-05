import "./App.css"
import { useState, useEffect } from "react"
import { postJoke, getAllJokes, jokeIsTold, deleteJoke } from "./services/jokeService"
import stevePic from "./assets/steve.png"


export const App = () => {
  const [userInput, setUserInput] = useState('')
  const [allJokes, setAllJokes] = useState([])
  const [toldJokes, setToldJokes] = useState([])
  const [untoldJokes, setUntoldJokes] = useState([])

  const fetchAllJokes = () =>{
    getAllJokes().then(jokesArray => {
      setAllJokes(jokesArray)
    })
  }

  useEffect(() => {
    fetchAllJokes()
  }, [])

  useEffect(() => {
    setToldJokes(allJokes.filter(joke => joke.told))
  }, [allJokes])

  useEffect(() => {
    setUntoldJokes(allJokes.filter(joke => !joke.told))
  }, [allJokes])


const handlePostJoke = () => {
  postJoke(userInput).then(() => {
    setUserInput('')
    fetchAllJokes()
  })
}

const handleJokeIsToldBoolean = (untoldJoke) => {
  console.log(untoldJoke)
  untoldJoke.told = !untoldJoke.told
  // joke.told = true
  jokeIsTold(untoldJoke).then(() => {
    fetchAllJokes()
  })
}

const handleDeleteJoke = (jokeToDelete) => {
  deleteJoke(jokeToDelete).then(() => {
    fetchAllJokes()
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
      }}>
      </input>

      <button className='joke-input-submit'
        onClick={handlePostJoke}
        >Post Joke
      </button>

    </section>

    <div className='joke-lists-container'>
      <div className='joke-list-container'>
        <h2>Untold<span className='untold-count'>{untoldJokes.length}#</span></h2>
        
        {untoldJokes.map(joke => {
          return (
            <>
            <div className='joke-list-item joke-list-item-text' key={joke.id}>{joke.text}
              <div>
              <button className='' onClick={() => handleJokeIsToldBoolean(joke)}><i className="fa-regular fa-face-meh" /></button>
              <button className='' onClick={() => handleDeleteJoke(joke)}><i className="fa-regular fa-trash-can" /></button>
              </div>
            </div>
            </>
          )
        })}
      </div>
      <div className='joke-list-container'>
        <h2>Told<span className='told-count'>{toldJokes.length}#</span></h2>
        {toldJokes.map(joke => {
          return (
            <div className='joke-list-item' key={joke.id}>
              {joke.text}
              <div>
              <button className='' onClick={() => handleJokeIsToldBoolean(joke)}><i className="fa-regular fa-face-meh" /></button>
              <button className='' onClick={() => handleDeleteJoke(joke)}><i className="fa-regular fa-trash-can" /></button>
              </div>
              </div>
          )
        })}
      </div>
    </div>
  </main>
  )
}

