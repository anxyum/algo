function addition(a, b) {
  return a + b
}
console.log(addition(2, 3)); // Résultat attendu : 5


function salutation(nom) {
  return `Bonjour ${nom}`
}
console.log(salutation("Alice")); // Résultat attendu : "Bonjour Alice"


function estPair(nombre) {
  return nombre % 2 === 0
}
console.log(estPair(4)); // Résultat attendu : true
console.log(estPair(7)); // Résultat attendu : false


function aireRectangle(longueur, largeur) {
  return longueur * largeur
}
console.log(aireRectangle(5, 3)); // Résultat attendu : 15


function estMajuscule(chaine) {
  return chaine === chaine.toUpperCase()
}
console.log(estMajuscule("HELLO")); // Résultat attendu : true
console.log(estMajuscule("Hello")); // Résultat attendu : false


function maxDeuxNombres(a, b) {
  return Math.max(a, b)
}
console.log(maxDeuxNombres(5, 10)); // Résultat attendu : 10


function difference(a, b) {
  return Math.max(a, b) - Math.min(a, b)
}
console.log(difference(10, 3)); // Résultat attendu : 7


function convertirEnCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9
}
console.log(convertirEnCelsius(100)); // Résultat attendu : 37.7778


function estMajeur(age) {
  return age >= 18
}
console.log(estMajeur(20)); // Résultat attendu : true
console.log(estMajeur(16)); // Résultat attendu : false


function maxTroisNombres(a, b, c) {
  return Math.max(a, b, c)
}
console.log(maxTroisNombres(3, 7, 5)); // Résultat attendu : 7


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
