// const notes=[

// {subject:"Machine Learning",topic:"Logistic Regression"},
// {subject:"Operating Systems",topic:"Process Scheduling"},
// {subject:"Computer Networks",topic:"OSI Model"},
// {subject:"Data Science",topic:"Data Cleaning"},
// {subject:"Java Programming",topic:"OOP Concepts"},
// {subject:"Software Engineering",topic:"SDLC"},
// {subject:"Artificial Intelligence",topic:"Search Algorithms"}

// ];

// function displayNotes(data){

// const container=document.getElementById("notesContainer");

// container.innerHTML="";

// data.forEach((note,i)=>{

// const card=document.createElement("div");

// card.className="note-card";

// card.innerHTML=`

// <div class="note-subject">
// <i class="fa-solid fa-book"></i> ${note.subject}
// </div>

// <div class="note-topic">
// ${note.topic}
// </div>

// `;

// container.appendChild(card);

// setTimeout(()=>{
// card.classList.add("show")
// },100*i)

// });

// }

// function searchNotes(){

// const value=document.getElementById("searchInput").value.toLowerCase();

// const filtered=notes.filter(n=>
// n.subject.toLowerCase().includes(value)
// );

// displayNotes(filtered);

// }

// document.getElementById("themeToggle").onclick=()=>{

// document.body.classList.toggle("light")

// }

// window.onload=()=>{

// setTimeout(()=>{
// document.getElementById("loader").style.display="none"
// },1200)

// }

// displayNotes(notes);
















// Hide loader when page loads
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

// Notes / Subjects list
const notes = [
  {
    title: "Machine Learning",
    description: "Learn ML algorithms and concepts",
    link: "machine-learning.html"
  },
  {
    title: "Aptitude",
    description: "Practice aptitude questions",
    link: "#"
  },
  {
    title: "Data Structures",
    description: "Learn DSA concepts and problems",
    link: "#"
  },
  {
    title: "Operating System",
    description: "Important OS notes",
    link: "#"
  }
];

// Display notes cards on homepage
function displayNotes() {
  const container = document.getElementById("notesContainer");
  container.innerHTML = "";

  notes.forEach(note => {
    const card = document.createElement("div");
    card.className = "note-card";

    card.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.description}</p>
      <a href="${note.link}" class="open-btn">Open</a>
    `;

    container.appendChild(card);
  });
}

// Search functionality
function searchNotes() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".note-card");

  cards.forEach(card => {
    let title = card.querySelector("h3").innerText.toLowerCase();

    if (title.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Theme toggle (dark / light mode)
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const icon = themeToggle.querySelector("i");

  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

// Run when page loads
displayNotes();
