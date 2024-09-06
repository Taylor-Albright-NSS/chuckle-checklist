import "./App.css"
import { JokeList } from "./components/jokes/JokesList"
import { UserInput } from "./components/UserInput"
import { Heading } from "./components/Heading"

export const App = () => {
  return (
  <main className='app-container'>
      <Heading />
      <UserInput />
      <JokeList />
  </main>
  )
}

