let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Accept Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "What is the full form of UPS",
    answer: "Uninterruptible power supply",
    options: [
      "Uninterruptible power supply",
      "Universal power supply",
      "Unless power supply",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "A permanent memory, which halls data and instruction for start-up the computer and does not erase data after power off.",
    answer: "ROM",
    options: [
      "RAM",
      "CPU",
      "ROM",
      "Network card interface"
    ]
  },
  {
    id: 6,
    question: "Main memory of computer is -",
    answer: "Internal",
    options: [
      "External",
      "Internal",
      "Both of the above",
      "Auxiliary"
    ]
  },
  {
    id: 7,
    question: "A computer cannot boot if it does not have the _____",
    answer: "Operating System",
    options: [
      "Compiler",
      "Operating System",
      "Loader",
      "Assembler"
    ]
  },
  {
    id: 8,
    question: "What is smallest unit of the information?",
    answer: "A bit",
    options: [
      "A bit",
      "A byte",
      "A nibble",
      "A block"
    ]
  },
  {
    id: 9,
    question: "Which of the following is an output device?",
    answer: "VDU",
    options: [
      "Keyboard",
      "Mouse",
      "VDU",
      "Lightpen"
    ]
  },
  {
    id: 10,
    question: "What is the decimal equivalent of the binary number 10111?",
    answer: "23",
    options: [
      "47",
      "22",
      "23",
      "31"
    ]
  }


];

let question_count = 0;
let points = 0;

window.onload = function () {
  show(question_count);

};

function next() {


  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);
  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);
  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}
function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
