export const postJoke = ({ setUserInput }, {userInput}) => {
    return (
        <button className='joke-input-submit'
        onClick={() => {   
            let databaseEntry = {userInput}
            databaseEntry.told = false
            setUserInput('')
            const putOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(databaseEntry)
            }
            fetch(`http://localhost:8088/jokes/`, putOptions)
        }}
        >Post Joke</button>
    )
}