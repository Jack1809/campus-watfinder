let currentStep = 0;
let steps = [];

// 🔥 ALL ROUTES (.jpeg now)
const routes = {

  library: [
    { img: "images/theatre.jpg", text: "Start outside Theatre & Arts building." },
    { img: "images/entrance.jpeg", text: "Enter through the main doors." },
    { img: "images/theatre-walkway.jpeg", text: "Walk into the main lobby." },
    { img: "images/caf-entrance.jpeg", text: "Enter the cafeteria." },
    { img: "images/caf1.jpeg", text: "Walk to the left of the cafeteria." },
    { img: "images/caf-exit.jpeg", text: "Now exit the cafeteria." },
    { img: "images/security-post.jpeg", text: "Pass the security desk." },
    { img: "images/bookstore.jpeg", text: "Walk towards the bookstore and turn left" },
    { img: "images/walkway1.jpeg", text: "Continue straight." },
    { img: "images/walkway2.jpeg", text: "Keep walking forward." },
    { img: "images/library.jpeg", text: "You’ve arrived at the Library." }
  ],

  registrar: [
    { img: "images/theatre.jpg", text: "Start outside Theatre & Arts building." },
    { img: "images/entrance.jpeg", text: "Enter through the main doors." },
    { img: "images/theatre-walkway.jpeg", text: "Walk into the main lobby." },
    { img: "images/caf-entrance.jpeg", text: "Enter the cafeteria." },
    { img: "images/caf1.jpeg", text: "Walk to the left of the cafeteria." },
    { img: "images/caf-exit.jpeg", text: "Now exit the cafeteria." },
    { img: "images/security-post.jpeg", text: "Pass the security desk." },
    { img: "images/bookstore.jpeg", text: "Walk towards the bookstore and turn left" },
    { img: "images/walkway1.jpeg", text: "Continue straight." },
    { img: "images/walkway2.jpeg", text: "Keep walking forward." },
    { img: "images/registrar.jpeg", text: "Registrar’s Office is on your right." }
  ],

  kings: [
    { img: "images/theatre.jpg", text: "Start outside Theatre & Arts building." },
    { img: "images/entrance.jpeg", text: "Enter through the main doors." },
    { img: "images/theatre-walkway.jpeg", text: "Walk into the main lobby." },
    { img: "images/caf-entrance.jpeg", text: "Enter the cafeteria." },
    { img: "images/caf1.jpeg", text: "Walk to the left of the cafeteria." },
    { img: "images/caf-exit.jpeg", text: "Now exit the cafeteria." },
    { img: "images/security-post.jpeg", text: "Pass the security desk." },
    { img: "images/bookstore.jpeg", text: "Walk towards the bookstore and turn left" },
    { img: "images/walkway1.jpeg", text: "Continue straight." },
    { img: "images/walkway2.jpeg", text: "Keep walking forward." },
    { img: "images/walkway-exit.jpeg", text: "Go through the doorway and turn to the first left." },
    { img: "images/kg-signboard.jpeg", text: "Follow the signs." },
    { img: "images/way-to-kl.jpeg", text: "Head toward King’s Lounge." },
    { img: "images/sakc-board.jpeg", text: "Pass the sakc board." },
    { img: "images/kg-entrance.jpeg", text: "You’ve arrived at King’s Lounge." }
  ],

  purple: [
    { img: "images/theatre.jpg", text: "Start outside Theatre & Arts building." },
    { img: "images/entrance.jpeg", text: "Enter through the main doors." },
    { img: "images/theatre-walkway.jpeg", text: "Walk into the main lobby." },
    { img: "images/caf-entrance.jpeg", text: "Enter the cafeteria." },
    { img: "images/caf1.jpeg", text: "Walk to the left of the cafeteria." },
    { img: "images/caf-exit.jpeg", text: "Now exit the cafeteria." },
    { img: "images/security-post.jpeg", text: "Pass the security desk." },
    { img: "images/bookstore.jpeg", text: "Walk towards the bookstore and turn left" },
    { img: "images/walkway1.jpeg", text: "Continue straight." },
    { img: "images/walkway2.jpeg", text: "Keep walking forward." },
    { img: "images/walkway-exit.jpeg", text: "Go through the doorway and turn to the first left." },
    { img: "images/kg-signboard.jpeg", text: "Follow the signs." },
    { img: "images/way-to-kl.jpeg", text: "Head toward King’s Lounge." },
    { img: "images/sakc-board.jpeg", text: "Pass the sakc board." },
    { img: "images/way-to-pp.jpeg", text: "Continue toward Purple Palace." },
    { img: "images/pp.jpeg", text: "You’ve arrived at Purple Palace." }
  ]
};


// 🚀 START
function startNavigation(destination) {
  steps = routes[destination];
  currentStep = 0;

  document.getElementById("viewer").classList.remove("hidden");

  showStep();
}


// 📸 SHOW STEP
function showStep() {
  const step = steps[currentStep];

  document.getElementById("stepImage").src = step.img;
  document.getElementById("stepText").innerText =
    `Step ${currentStep + 1}/${steps.length}: ${step.text}`;
}


// ➡ NEXT
function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep();
  }
}


// ⬅ BACK
function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep();
  }
}