// ===== PAGE NAVIGATION =====

// function to open notes pages
function openSubject(subject) {

    // hide all sections
    document.querySelectorAll(".subject-page").forEach(page => {
        page.style.display = "none";
    });

    // show selected subject
    document.getElementById(subject).style.display = "block";

}


// ===== MACHINE LEARNING NOTES =====

// list of notes
const mlNotes = [
    {
        title: "Introduction to Machine Learning",
        content: "Machine Learning is a field of Artificial Intelligence where computers learn from data without being explicitly programmed."
    },
    {
        title: "Supervised Learning",
        content: "Supervised learning uses labeled datasets to train algorithms that classify data or predict outcomes."
    },
    {
        title: "Unsupervised Learning",
        content: "Unsupervised learning finds hidden patterns or structures in input data without labeled responses."
    },
    {
        title: "Regression",
        content: "Regression is used to predict continuous values such as price prediction or temperature."
    },
    {
        title: "Classification",
        content: "Classification predicts categories such as spam or not spam."
    }
];


// function to load notes
function loadMLNotes(){

    const container = document.getElementById("ml-notes");

    container.innerHTML = "";

    mlNotes.forEach(note => {

        const div = document.createElement("div");
        div.className = "note-card";

        div.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
        `;

        container.appendChild(div);

    });

}


// run when page loads
document.addEventListener("DOMContentLoaded", loadMLNotes);
