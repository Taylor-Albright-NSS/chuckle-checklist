export const postJoke = (userInput) => {
    console.log(userInput)
    const putOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ text: userInput })
    }
    return fetch("http://localhost:8088/jokes", putOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to post joke");
      }
      return response.json();
    });
}

export const getAllJokes = async () => {
    return fetch(`http://localhost:8088/jokes`).then(res => res.json())
}