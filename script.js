const notes=[

{subject:"Machine Learning",topic:"Logistic Regression"},
{subject:"Operating Systems",topic:"Process Scheduling"},
{subject:"Computer Networks",topic:"OSI Model"},
{subject:"Data Science",topic:"Data Cleaning"},
{subject:"Java Programming",topic:"OOP Concepts"},
{subject:"Software Engineering",topic:"SDLC"},
{subject:"Artificial Intelligence",topic:"Search Algorithms"}

];

function displayNotes(data){

const container=document.getElementById("notesContainer");

container.innerHTML="";

data.forEach((note,i)=>{

const card=document.createElement("div");

card.className="note-card";

card.innerHTML=`

<div class="note-subject">
<i class="fa-solid fa-book"></i> ${note.subject}
</div>

<div class="note-topic">
${note.topic}
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

/* theme toggle */

document.getElementById("themeToggle").onclick=()=>{

document.body.classList.toggle("light")

}

/* loader */

window.onload=()=>{

setTimeout(()=>{
document.getElementById("loader").style.display="none"
},1200)

}

displayNotes(notes);