import { useState } from "react"
import { postJoke } from "../services/jokeService"

export const UserInput = () => {
    const [userInput, setUserInput] = useState('')

    const handlePostJoke = () => {
        postJoke(userInput).then(() => {
        setUserInput('')
    })
}
    return (
    <>
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
  </>
    )
}