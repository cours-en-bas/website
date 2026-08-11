// Modifie ce fichier pour personnaliser tes questions.
// - image   : chemin vers l'image de la question (dossier images/)
// - question: le texte affiché sous l'image
// - answers : liste des réponses acceptées (insensible aux majuscules/accents)

const QUESTIONS = [
  {
    image: "images/q1.jpg",
    question: "Où a été prise cette photo ?",
    answers: ["ile d'elbe"]
  },
  {
    image: "images/q2.jpg",
    question: "ça se corse, quel est le nom de ce sommet, surplombant ce beau lac (et bucolique auberge) ?",
    answers: ["la palette"]
  },
  {
    image: "images/q3.jpg",
    question: "je ne te ferais pas l'affront de demander son nom, mais que mange cet animal?",
    answers: ["des os"]
  },
  {
    image: "images/q4.jpg",
    question: "Question 4 ?",
    answers: ["reponse4"]
  },
  {
    image: "images/q5.jpg",
    question: "Question 5 ?",
    answers: ["reponse5"]
  },
  {
    image: "images/q6.jpg",
    question: "Question 6 ?",
    answers: ["reponse6"]
  },
  {
    image: "images/q7.jpg",
    question: "Question 7 ?",
    answers: ["reponse7"]
  }
];

// Image affichée en plein écran une fois toutes les questions réussies
const FINAL_IMAGE = "images/final.jpg";
