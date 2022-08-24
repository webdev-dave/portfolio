const projImgBudget = document.getElementById("budget-project-img");
const budget = document.getElementById("budget-project-overlay");
const btnContainerBudget = document.getElementById("budget-btn-container");
const projDescBudget = document.getElementById("budget-project-description");

const projImgJam = document.getElementById("jam-project-img");
const jam = document.getElementById("jam-project-overlay");
const btnContainerJam = document.getElementById("jam-btn-container");
const projDescJam = document.getElementById("jam-project-description");

const projImgReddit = document.getElementById("reddit-project-img");
const reddit = document.getElementById("reddit-project-overlay");
const btnContainerReddit = document.getElementById("reddit-btn-container");
const projDescReddit = document.getElementById("reddit-project-description");

let budgetIsHidden;
let jamIsHidden;
let redditIsHidden;

if (window.innerWidth <= 900) {
  btnContainerBudget.style.display = "none";
  projDescBudget.style.display = "none";
  budgetIsHidden = true;

  btnContainerJam.style.display = "none";
  projDescJam.style.display = "none";
  jamIsHidden = true;

  btnContainerReddit.style.display = "none";
  projDescReddit.style.display = "none";
  redditIsHidden = true;

  console.log("mobile");
} else {
  console.log("desktop");
}

const hideDetails = (btnContainer, projDesc, projImg) => {
  btnContainer.style.display = "none";
  projDesc.style.display = "none";
  projImg.classList.remove("fx");
};

const revealDetails = (btnContainer, projDesc, projImg) => {
  btnContainer.style.display = "flex";
  projDesc.style.display = "flex";
  projImg.classList.add("fx");
};

budget.addEventListener("click", () => {
  if (budgetIsHidden) {
    revealDetails(btnContainerBudget, projDescBudget, projImgBudget);
    hideDetails(btnContainerJam, projDescJam, projImgJam);
    hideDetails(btnContainerReddit, projDescReddit, projImgReddit);
    budgetIsHidden = false;
    jamIsHidden = true;
    redditIsHidden = true;
  } else {
    hideDetails(btnContainerBudget, projDescBudget, projImgBudget);
    budgetIsHidden = true;
  }
});

jam.addEventListener("click", () => {
  if (jamIsHidden) {
    revealDetails(btnContainerJam, projDescJam, projImgJam);
    hideDetails(btnContainerBudget, projDescBudget, projImgBudget);
    hideDetails(btnContainerReddit, projDescReddit, projImgReddit);
    jamIsHidden = false;
    budgetIsHidden = true;
    redditIsHidden = true;
  } else {
    hideDetails(btnContainerJam, projDescJam, projImgJam);
    jamIsHidden = true;
  }
});

reddit.addEventListener("click", () => {
  if (redditIsHidden) {
    revealDetails(btnContainerReddit, projDescReddit, projImgReddit);
    hideDetails(btnContainerJam, projDescJam, projImgJam);
    hideDetails(btnContainerBudget, projDescBudget, projImgBudget);
    redditIsHidden = false;
    budgetIsHidden = true;
    jamIsHidden = true;
  } else {
    hideDetails(btnContainerReddit, projDescReddit, projImgReddit);
    redditIsHidden = true;
  }
});
