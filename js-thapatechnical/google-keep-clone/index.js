const addButtton = document.querySelector('#add');


addNewNote = (text = '') => {
    const notesMainDiv = document.createElement('div');
    notesMainDiv.classList.add('note');
    // console.log(notesMainDiv);
    const htmlNotesData = `<div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash"></i></button>
</div>
<div class="main">
    <textarea autofocus id="notesTextarea"></textarea>
</div>`;

    notesMainDiv.insertAdjacentHTML('afterbegin',htmlNotesData);

    console.log(notesMainDiv);
    
    
    const textarea = notesMainDiv.querySelector('#notesTextarea');
    textarea.value = text;
    
    
    document.querySelector('body').appendChild(notesMainDiv);
    
    if(text === ''){
        setTimeout(() => {
            textarea.focus();
        }, 5);
    }else{ 
        console.log(text);   
    }






    











    // deleting  notes:- (wrong)
    // const trashBtn = document.querySelector('.delete');
    // trashBtn.addEventListener('click',() => notesMainDiv.removeChild());
    
    // deleting  notes:- (correct)
    const trashBtn = notesMainDiv.querySelector('.delete');
    trashBtn.addEventListener('click', () => {
        // Remove the entire notesMainDiv when the delete button is clicked
        document.querySelector('body').removeChild(notesMainDiv);
    });






}


addButtton.addEventListener('click', () => {
    addNewNote();
    return false; // Prevent the default behavior of the click event
});


// addButtton.addEventListener('click',addNewNote)

// addButtton.addEventListener('click', (event) => {
//     event.preventDefault(); // Prevent the default behavior of the click event
//     addNewNote();
// });
