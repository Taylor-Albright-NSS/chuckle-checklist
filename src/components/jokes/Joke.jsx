import { jokeIsTold, deleteJoke, fetchAllJokes } from "../../services/jokeService";

export const handleJokeIsToldBoolean = (untoldJoke) => {
    console.log(untoldJoke)
    untoldJoke.told = !untoldJoke.told
    jokeIsTold(untoldJoke).then(() => {
      fetchAllJokes()
    })
  }

const handleDeleteJoke = (jokeToDelete) => {
    deleteJoke(jokeToDelete).then(() => {
      fetchAllJokes()
    })
}

export const Joke = ({jokes}) => {
    return (
          <div className='joke-list-item' key={jokes.id}>
            {jokes.text}
            <div>
            <button className='' onClick={() => handleJokeIsToldBoolean(jokes)}><i className="fa-regular fa-face-meh" /></button>
            <button className='' onClick={() => handleDeleteJoke(jokes)}><i className="fa-regular fa-trash-can" /></button>
            </div>
            </div>
        )
    
}



