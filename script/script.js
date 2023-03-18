const form = document.querySelector("form");
const distanceInput = document.querySelector("#distance");
const heuresInput = document.querySelector("#heures");
const minutesInput = document.querySelector("#minutes");

const distanceResult = document.querySelector("#distance_result");
const tempsResult = document.querySelector("#temps_result");
const allureResult = document.querySelector("#allure_result");
const erreur = document.querySelector(".error");
blockResultat = document.querySelector(".blockResultat");
blockResultat.style.display = "none";
erreur.style.display = "none";

const distances = {
  5: 5,
  10: 10,
  21.1: 21.1,
  42.195: 42.195,
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const distance = distances[distanceInput.value];
  const heures = heuresInput.value ? heuresInput.value : 0;
  const minutes = minutesInput.value ? minutesInput.value : 0;

  let nbEntreesRemplies = 0;

  if (distance) {
    nbEntreesRemplies++;
  }
  if (heures || minutes) {
    nbEntreesRemplies++;
  }

  if (nbEntreesRemplies < 2) {
    erreur.style.display = "block";
    erreur.textContent =
      "Sérieusement ? T'as cru que j'allais calculer une allure sans temps ?! Renseigne une durée. Coureur du dimanche va...";
    distanceResult.textContent = "";
    tempsResult.textContent = "";
    allureResult.textContent = "";
    return;
  }

  const tempsTotalEnMinutes =
    (heuresInput.value ? heuresInput.value : 0) * 60 +
    parseInt(minutesInput.value ? minutesInput.value : 0);
  const tempsTotalEnHeures = tempsTotalEnMinutes / 60;

  const tempsParKmEnMinutes = tempsTotalEnMinutes / distance;
  const tempsParKmEnHeures = tempsParKmEnMinutes / 60;

  distanceResult.textContent = `Distance : ${distance} km`;
  tempsResult.textContent = `Temps : ${heures}h ${minutes}min`;
  allureResult.textContent = `Allure : ${tempsParKmEnMinutes.toFixed(
    2
  )} min/km`;
  erreur.textContent = "";

  calculFinished = true;
  blockResultat.style.display = "block";

  document.querySelector("#resultats").style.display = "block";
});
