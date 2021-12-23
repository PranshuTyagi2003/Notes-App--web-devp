console.log('Welcome to notes app');
showNotes();

// If a user adds a note, add it to the local storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt")
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addTxt.value = ""
    console.log(notesObj)
    showNotes();
})


// If a user adds a heading, add it to a local storage
// let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {

    let addHead = document.getElementById("addHead")
    let head = localStorage.getItem("head");
    if (head == null) {
        headObj = []
    }
    else {
        headObj = JSON.parse(head)
    }
    headObj.push(addHead.value);
    localStorage.setItem("head", JSON.stringify(headObj))
    addHead.value = ""
    console.log(headObj)
    showNotes();
})

// Function to show elements from localStorage
function showNotes(params) {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }

    let head = localStorage.getItem("head");
    if (head == null) {
        headObj = []
    }
    else {
        headObj = JSON.parse(head)
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${headObj[index]}</h5>
                    <p class="card-text"> ${element}</p>
                    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`;
    });

    let notesElm = document.getElementById('notes')
    if (notesObj.length != 0){
        notesElm.innerHTML = html
    }
    else{
        notesElm.innerHTML = `<h2>Nothing to Show. Use "Add Note" section Above to add notes</h2>`
    }

}


// Function to delete a Note
function deleteNote(index) {
    console.log("I am deleting", index)

    let notes = localStorage.getItem("notes")
    let head = localStorage.getItem("head")
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    if (head == null) {
        headObj = []
    }
    else {
        headObj = JSON.parse(head)
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj))

    console.log("I am deleting Heading", index)

    headObj.splice(index, 1);
    localStorage.setItem("head", JSON.stringify(headObj))
    showNotes() 
}



// Search Bar 
let search = document.getElementById('searchTxt')
search.addEventListener("input", function(){

    console.log('Input event fired!')
    let inputVal = search.value.toLowerCase();
    console.log('Input event fired!', inputVal)
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText
        if(cardTxt.includes(inputVal)){
            element.style.display = "block"
        }
        else{
            element.style.display = "none"
        }
        // console.log(cardTxt)
            })

    
})


/* Further Features
1. Add Title
2. Mark a Note as Important
3. Seperate notes by user.

*/



