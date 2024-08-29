const joke = document.querySelector(".content");
const url = "https://icanhazdadjoke.com/";
async function getJoke() {
  try {
    let response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    let jsonData = await response.json();
    console.log(jsonData);
    joke.innerHTML = jsonData.joke;
  } catch (error) {
    console.log(error);
  }
}
getJoke();

document.querySelector(".btn").addEventListener("click", getJoke);
