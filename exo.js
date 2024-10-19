// Exercice 1

function addition(a, b) {
  return a + b
}
console.log(addition(2, 3)); // Résultat attendu : 5

// Exercice 2

function salutation(nom) {
  return `Bonjour ${nom}`
}
console.log(salutation("Alice")); // Résultat attendu : "Bonjour Alice"

// Exercice 3

function estPair(nombre) {
  return nombre % 2 === 0
}
console.log(estPair(4)); // Résultat attendu : true
console.log(estPair(7)); // Résultat attendu : false

// Exercice 4

function aireRectangle(longueur, largeur) {
  return longueur * largeur
}
console.log(aireRectangle(5, 3)); // Résultat attendu : 15

// Exercice 5

function estMajuscule(chaine) {
  return chaine === chaine.toUpperCase()
}
console.log(estMajuscule("HELLO")); // Résultat attendu : true
console.log(estMajuscule("Hello")); // Résultat attendu : false

// Exercice 6

function maxDeuxNombres(a, b) {
  return Math.max(a, b)
}
console.log(maxDeuxNombres(5, 10)); // Résultat attendu : 10

// Exercice 7

function difference(a, b) {
  return Math.max(a, b) - Math.min(a, b)
}
console.log(difference(10, 3)); // Résultat attendu : 7

// Exercice 8

function convertirEnCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9
}
console.log(convertirEnCelsius(100)); // Résultat attendu : 37.7778

// Exercice 9

function estMajeur(age) {
  return age >= 18
}
console.log(estMajeur(20)); // Résultat attendu : true
console.log(estMajeur(16)); // Résultat attendu : false

// Exercice 10

function maxTroisNombres(a, b, c) {
  return Math.max(a, b, c)
}
console.log(maxTroisNombres(3, 7, 5)); // Résultat attendu : 7

// Exercice 11

function calculer(a, b, operation) {
  return operation(a, b)
}
function addition(x, y) {
  return x + y
}
function multiplication(x, y) {
  return x * y
}

console.log(calculer(5, 3, addition)); // Résultat attendu : 8
console.log(calculer(5, 3, multiplication)); // Résultat attendu : 15

// Exercice 12

function filtrerTexte(chaine, filtre) {
  let result = ""
  for (i = 0; i < chaine.length; i++) {
    c = chaine[i]
    if (filtre(c)) {
      result += c
    }
  }
  return result
}
function estVoyelle(c) {
  return "aeuoiy".includes(c)
}
console.log(filtrerTexte("Bonjour", estVoyelle)); // Résultat attendu : "oo"

// Exercice 13

function appliquerTroisFois(valeur, fonction) {
  for (let i = 0; i < 3; i++) {
    valeur = fonction(valeur)
  }
  return valeur
}
function incrementer(x) {
  return x + 1
}

console.log(appliquerTroisFois(5, incrementer)); // Résultat attendu : 8

// Exercice 14

function transformerTexte(texte, transformation) {
   let result = ""
  for (let i = 0; i < texte.length; i++) {
    c = texte[i]
    result += transformation(c)
  }
  return result
}
function majuscule(c) {
  return c.toUpperCase()
}
function avecPoint(c) {
  return c + "."
}

console.log(transformerTexte("bonjour", majuscule)); // Résultat attendu : "BONJOUR"
console.log(transformerTexte("bonjour", avecPoint)); // Résultat attendu : "b.o.n.j.o.u.r."

// Exercice 15

function conditionnelle(a, b, condition) {
  if (condition(a) && condition(b)) {
    return a + b
  } else {
    return a * b
  }
}
function estPairEtPositif(x) {
  return x % 2 === 0 && x >= 0
}

console.log(conditionnelle(4, 2, estPairEtPositif)); // Résultat attendu : 6 (car la condition est remplie)
console.log(conditionnelle(3, 2, estPairEtPositif)); // Résultat attendu : 6 (car la condition échoue, donc produit)

// Exercice 16

function estPositif(nombre) {
  if (nombre > 0) return "Positif"
  if (nombre < 0) return "Négatif"
  return "Zéro"
}
console.log(estPositif(5)); // Résultat attendu : "Positif"
console.log(estPositif(-3)); // Résultat attendu : "Négatif"
console.log(estPositif(0)); // Résultat attendu : "Zéro"

// Exercice 17

function comparerNombres(a, b) {
  if (a > b) return "Plus grand"
  if (a < b) return "Plus petit"
  return "Égal"
}
console.log(comparerNombres(5, 10)); // Résultat attendu : "Plus petit"
console.log(comparerNombres(10, 5)); // Résultat attendu : "Plus grand"
console.log(comparerNombres(7, 7)); // Résultat attendu : "Égal"

// Exercice 18

function calculerPrix(prix) {
  if (prix > 100) return prix * 0.9
  return prix
}
console.log(calculerPrix(120)); // Résultat attendu : 108
console.log(calculerPrix(80)); // Résultat attendu : 80

// Exercice 19

function tarif(age) {
  if (age < 5) return "Gratuit"
  else if (age <= 18) return "Réduit"
  else return "Plein tarif"
}
console.log(tarif(3)); // Résultat attendu : "Gratuit"
console.log(tarif(15)); // Résultat attendu : "Réduit"
console.log(tarif(25)); // Résultat attendu : "Plein tarif"

// Exercice 20

function longueurChaine(chaine) {
  if (chaine.length() > 10) return "Longue"
  return "Courte"
}
console.log(longueurChaine("JavaScript")); // Résultat attendu : "Courte"
console.log(longueurChaine("Développement web")); // Résultat attendu : "Longue"

// Exercice 21

function categorieTemperature(temp) {
  if (temp > 30) return "Chaud"
  if (temp < 15) return "Froid"
  return "Tempéré"
}
console.log(categorieTemperature(35)); // Résultat attendu : "Chaud"
console.log(categorieTemperature(20)); // Résultat attendu : "Tempéré"
console.log(categorieTemperature(10)); // Résultat attendu : "Froid"

// Exercice 22

function multipleDeCinq(nombre) {
  if (nombre % 5 === 0) return "Oui"
  return "Non"
}
console.log(multipleDeCinq(10)); // Résultat attendu : "Oui"
console.log(multipleDeCinq(7)); // Résultat attendu : "Non"