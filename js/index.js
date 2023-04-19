
const buttons = document.querySelectorAll("button");
const answers = document.querySelectorAll("p");
let indexes = [];

//Add Ids to answers paragraphs
answers.forEach((answer, index) => {
  answer.setAttribute("id", "answer" + index);
});

//Button Click event
buttons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    if (button.textContent == "+") {
      button.textContent = "-";
    } else {
      button.textContent = "+";
    }
    for (let i = 0; i < buttons.length; i++) {
      indexes.push(i);
    }
    indexes.splice(index, 1);
    for (const j of indexes) {
      buttons[j].textContent = "+";
      let shownId = "answer" + index;
      let hiddenId = "answer" + j;
      document.getElementById(hiddenId).style.display = "none";
      if (button.textContent == "+") {
        document.getElementById(shownId).style.display = "none";
      } else {
        document.getElementById(shownId).style.display = "block";
      }
    }
    indexes = [];
  });
});
