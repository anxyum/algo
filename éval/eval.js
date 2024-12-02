// Exercice 1

function convertirCelsiusEnFahrenheit(celsius) {
  return celsius * 9/5 + 32
}
console.log(convertirCelsiusEnFahrenheit(0)); // Résultat attendu : 32
console.log(convertirCelsiusEnFahrenheit(25)); // Résultat attendu : 77

// Exercice 2

function sommeTroisNombres(a, b, c) {
  return a + b + c
}
console.log(sommeTroisNombres(5, 10, 15)); // Résultat attendu : 30

// Exercice 3

function heuresEnSecondes(heures) {
  return heures * 3600
}
console.log(heuresEnSecondes(2)); // Résultat attendu : 7200

// Exercice 4

function peutVoter(age, nationalite) {
  if (age >= 18 && nationalite === "française") return "Éligible"
  return "Non éligible"
}
console.log(peutVoter(20, "française")); // Résultat attendu : "Éligible"
console.log(peutVoter(16, "française")); // Résultat attendu : "Non éligible"
console.log(peutVoter(20, "espagnole")); // Résultat attendu : "Non éligible"

// Exercice 5

function tarif(age) {
  if (age < 5)   return "Gratuit"
  if (age <= 18) return "Réduit"
  return "Plein tarif"
}
console.log(tarif(3)); // Résultat attendu : "Gratuit"
console.log(tarif(15)); // Résultat attendu : "Réduit"
console.log(tarif(25)); // Résultat attendu : "Plein tarif"
