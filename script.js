const notes=[

{subject:"Machine Learning",topic:"Logistic Regression",page:"machine-learning.html",topicPage:"logistic-regression.html"},

{subject:"Operating Systems",topic:"Process Scheduling",page:"os.html",topicPage:"process-scheduling.html"},

{subject:"Computer Networks",topic:"OSI Model",page:"cn.html",topicPage:"osi-model.html"},

{subject:"Data Science",topic:"Data Cleaning",page:"datascience.html",topicPage:"data-cleaning.html"},

{subject:"Java Programming",topic:"OOP Concepts",page:"java.html",topicPage:"oop.html"},

{subject:"Software Engineering",topic:"SDLC",page:"se.html",topicPage:"sdlc.html"},

{subject:"Artificial Intelligence",topic:"Search Algorithms",page:"ai.html",topicPage:"search-algorithms.html"}

];

function displayNotes(data){

const container=document.getElementById("notesContainer");

container.innerHTML="";

data.forEach((note,i)=>{

const card=document.createElement("div");

card.className="note-card";

/* clicking subject opens subject page */
card.onclick=()=>{
window.location.href = note.page;
};

card.innerHTML=`

<div class="note-subject">
<i class="fa-solid fa-book"></i> ${note.subject}
</div>

<div class="note-topic">
<a href="${note.topicPage}" class="topic-link">${note.topic}</a>
</div>

`;

container.appendChild(card);

setTimeout(()=>{
card.classList.add("show")
},100*i)

});

}

function searchNotes(){

const value=document.getElementById("searchInput").value.toLowerCase();

const filtered=notes.filter(n=>
n.subject.toLowerCase().includes(value)
);

displayNotes(filtered);

}

document.getElementById("themeToggle").onclick=()=>{

document.body.classList.toggle("light")

}

window.onload=()=>{

setTimeout(()=>{
document.getElementById("loader").style.display="none"
},1200)

}

displayNotes(notes);
