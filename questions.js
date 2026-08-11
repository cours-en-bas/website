// Modifie ce fichier pour personnaliser tes questions.
// - image   : chemin vers l'image de la question (dossier images/)
// - question: le texte affiché sous l'image
// - answers : liste des réponses acceptées (insensible aux majuscules/accents)

const QUESTIONS = [
  {
    image: "images/q1.jpg",
    question: "Cette photo a été prise dans un lieu chargé d'histoire, qui a vu naître en nous des émotions encore plus fortes aujourd'hui. quel est cet endroit ?",
    answers: ["ile d'elbe"]
  },
  {
    image: "images/q2.jpg",
    question: "ça se corse, ce bucolique sommet surplombe un merveilleux lac, et une auberge non moins charmante (malgré certains contretemps pouvant se dérouler dans sa salle à manger), comment s'appelle-t-il (le sommet) ?",
    answers: ["la palette"]
  },
  {
    image: "images/q3.jpg",
    question: "je ne te ferais pas l'affront de demander son nom, mais que mange cet animal?",
    answers: ["des os"]
  },
  {
    image: "images/q4.jpg",
    question: "Un coûteux café pour tarin affiné est cultivé dans la province de Boquete, comment s'appelle cette variété ?",
    answers: ["geisha"]
  },
  {
    image: "images/q5.jpg",
    question: "Vous rappelez-vous des fameuses Tre Cime? quelles belles roches... il existe d'ailleurs trois types de roches, magmatique, sédimentaire, et ... ?",
    answers: ["métamorphique"]
  },
  {
    image: "images/q6.jpg",
    question: "Ah... les Tatzelwürmlis. Leur réputation n'est plus à faire. Néanmoins, ils ne sont pas la seule curiosité présente à Meiringen. A qui est dédié le musée que nous n'avons évidemment pas visité lors de notre passage dans ces contrées?",
    answers: ["Sherlock holmes"]
  },
  {
    image: "images/q7.jpg",
    question: "Question 7 ?",
    answers: ["reponse7"]
  }
];

// Image affichée en plein écran une fois toutes les questions réussies
const FINAL_IMAGE = "images/final.jpg";
