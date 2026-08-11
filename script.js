let current = 0;

const img = document.getElementById("question-image");
const text = document.getElementById("question-text");
const input = document.getElementById("answer-input");
const app = document.getElementById("app");
const finalImg = document.getElementById("final-image");

function normalize(str) {
  return str
    .toString()
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // enlève les accents
}

function loadQuestion(index) {
  const q = QUESTIONS[index];
  img.style.opacity = 0;
  text.style.opacity = 0;

  setTimeout(() => {
    img.src = q.image;
    text.textContent = q.question;
    img.style.opacity = 1;
    text.style.opacity = 1;
    input.value = "";
    input.focus();
  }, 200);
}

function checkAnswer() {
  const q = QUESTIONS[current];
  const given = normalize(input.value);
  const correct = q.answers.some(a => normalize(a) === given);

  if (given.length === 0) return;

  if (correct) {
    current++;
    if (current < QUESTIONS.length) {
      loadQuestion(current);
    } else {
      showFinal();
    }
  } else {
    input.classList.remove("shake");
    void input.offsetWidth; // reset animation
    input.classList.add("shake");
  }
}

function showFinal() {
  app.style.display = "none";
  finalImg.src = FINAL_IMAGE;
  finalImg.style.display = "block";
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkAnswer();
  }
});

loadQuestion(current);
