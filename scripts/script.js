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

let isMobile;
let budgetIsHidden;
let jamIsHidden;
let redditIsHidden;

if (window.innerWidth <= 900) {
  console.log('script is running')
  isMobile = true;
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
  isMobile = false;
}




const hideDetails = (proj, btnContainer, projDesc, projImg) => {
  btnContainer.style.display = "none";
  projDesc.style.display = "none";
  proj.classList.remove("fx");
  projImg.classList.remove("fx");
};

const revealDetails = (proj, btnContainer, projDesc, projImg) => {
  btnContainer.style.display = "flex";
  projDesc.style.display = "flex";
  proj.classList.add("fx");
  projImg.classList.add("fx");
};


// const handleBodyClick = () => {
//     projImgBudget.classList.remove("fx");
//     projImgJam.classList.remove("fx");
//     projImgReddit.classList.remove("fx");
// }

// document.body.addEventListener("click", handleBodyClick());



isMobile && budget.addEventListener("click", () => {
  if (budgetIsHidden) {
    revealDetails(budget, btnContainerBudget, projDescBudget, projImgBudget);
    hideDetails(jam, btnContainerJam, projDescJam, projImgJam);
    hideDetails(reddit, btnContainerReddit, projDescReddit, projImgReddit);
    budgetIsHidden = false;
    jamIsHidden = true;
    redditIsHidden = true;
  } else {
    hideDetails(budget, btnContainerBudget, projDescBudget, projImgBudget);
    budgetIsHidden = true;
  }
});

isMobile && jam.addEventListener("click", () => {
  if (jamIsHidden) {
    revealDetails(jam, btnContainerJam, projDescJam, projImgJam);
    hideDetails(budget, btnContainerBudget, projDescBudget, projImgBudget);
    hideDetails(reddit, btnContainerReddit, projDescReddit, projImgReddit);
    jamIsHidden = false;
    budgetIsHidden = true;
    redditIsHidden = true;
  } else {
    hideDetails(jam, btnContainerJam, projDescJam, projImgJam);
    jamIsHidden = true;
  }
});

isMobile && reddit.addEventListener("click", () => {
  if (redditIsHidden) {
    revealDetails(reddit, btnContainerReddit, projDescReddit, projImgReddit);
    hideDetails(jam, btnContainerJam, projDescJam, projImgJam);
    hideDetails(budget, btnContainerBudget, projDescBudget, projImgBudget);
    redditIsHidden = false;
    budgetIsHidden = true;
    jamIsHidden = true;
  } else {
    hideDetails(reddit, btnContainerReddit, projDescReddit, projImgReddit);
    redditIsHidden = true;
  }
});


