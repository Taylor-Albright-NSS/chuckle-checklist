export const postJoke = async (userInput) => {
    const postOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ text: userInput, told: false })
    }
    return fetch("http://localhost:8088/jokes", postOptions)
    .then((response) => response.json());
}

export const getAllJokes = async () => {
    return fetch(`http://localhost:8088/jokes`).then(res => res.json())
}

export const jokeIsTold = async (untoldJoke) => {
    // console.log(untoldJoke, ' UNTOLD JOKE ITEM')
    // console.log({untoldJoke}, ' UNTOLD JOKE OBJECTIFIED')
    const putOptions = {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(untoldJoke)
    }
    return fetch(`http://localhost:8088/jokes/${untoldJoke.id}`, putOptions)
    .then((response) => response.json());
}

export const deleteJoke = async (jokeToDelete) => {
    const putOptions = {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
    }
    return fetch(`http://localhost:8088/jokes/${jokeToDelete.id}`, putOptions)
    .then((response) => response.json());
}

export const fetchAllJokes = () => {
    return getAllJokes()
}