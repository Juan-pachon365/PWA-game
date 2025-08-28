const words = [
  {
    spanish: "Casa",
    english: "House",
    french: "Maison",
    description: "Un lugar donde vive una familia o persona."
  },
  {
    spanish: "Perro",
    english: "Dog",
    french: "Chien",
    description: "Un animal doméstico que es amigo del hombre."
  },
  {
    spanish: "Amor",
    english: "Love",
    french: "Amour",
    description: "Un sentimiento profundo de afecto hacia alguien."
  },
  {
    spanish: "Libro",
    english: "Book",
    french: "Livre",
    description: "Un conjunto de hojas con texto o imágenes para leer."
  },
  {
    spanish: "Agua",
    english: "Water",
    french: "Eau",
    description: "Líquido esencial para la vida."
  },
  {
    spanish: "Feliz",
    english: "Happy",
    french: "Heureux",
    description: "Sentirse contento o alegre."
  },
  {
    spanish: "Escuela",
    english: "School",
    french: "École",
    description: "Lugar donde se enseña y aprende."
  }
];

const spanishWord = document.getElementById("spanish-word");
const englishWord = document.getElementById("english-word");
const frenchWord = document.getElementById("french-word");
const description = document.getElementById("description");
const btn = document.getElementById("new-word");

btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  const word = words[randomIndex];

  spanishWord.textContent = word.spanish;
  englishWord.textContent = word.english;
  frenchWord.textContent = word.french;
  description.textContent = word.description;
});
