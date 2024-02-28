////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const searchBtn = document.getElementById("search-btn");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "25c42057a9mshe978fe9b30ca987p16335fjsna710271d15b9",
    "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
  },
};

searchBtn.addEventListener("click", getMealList);

async function getMealList() {
  let searchInputTxt = document.getElementById("search-input").value.trim();
  try {
    const response = await fetch(
      "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=" +
        searchInputTxt,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //       // let dtsAlimento = document.getElementById("lista__recetas");
        //       // recetas.innerHTML = `<p class="recetas">${hits}</p>`;
      });
  } catch (error) {
    console.log("Error de respuesta en la API");
  }
}
