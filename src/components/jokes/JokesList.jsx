import { useEffect, useState } from "react"
import { getAllJokes } from "../../services/jokeService"
import { Joke } from "./Joke"

export const JokeList = () => {
    const [toldJokes, setToldJokes] = useState([])
    const [untoldJokes, setUntoldJokes] = useState([])
    const [allJokes, setAllJokes] = useState([])

    useEffect(() => {
        getAllJokes().then(allJokesArray => {
            setAllJokes(allJokesArray)
        })
      }, [allJokes])

    useEffect(() => {
        setToldJokes(allJokes.filter(joke => joke.told))
      }, [allJokes])
    
      useEffect(() => {
        setUntoldJokes(allJokes.filter(joke => !joke.told))
      }, [allJokes])

    return (
        <div className='joke-lists-container'>
        <div className='joke-list-container'>
          <h2>Untold<span className='untold-count'>{untoldJokes.length}#</span></h2>
          {untoldJokes.map(joke => {
            return <Joke jokes={joke} key={joke.id} />
          })}
        </div>
  
        <div className='joke-list-container'>
          <h2>Told<span className='told-count'>{toldJokes.length}#</span></h2>
          {toldJokes.map(joke => {
            return <Joke jokes={joke} key={joke.id} />
          })}
        </div>
  
      </div>
    )
    
}