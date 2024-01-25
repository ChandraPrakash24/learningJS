const addButtton = document.querySelector('#add');


addNewNote = (text = '') => {
    const notesMainDiv = document.createElement('div');
    notesMainDiv.classList.add('note');
    // console.log(notesMainDiv);
    const htmlNotesData = `<div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i title="Delete" class="fas fa-trash"></i></button>
</div>
<div class="main">
    <textarea id="notesTextarea" ${text ? 'readonly' : ''}></textarea>
</div>`;

    notesMainDiv.insertAdjacentHTML('afterbegin',htmlNotesData);

    console.log(notesMainDiv);
    
    
    const textarea = notesMainDiv.querySelector('#notesTextarea');
    textarea.value = text;
    
    
    document.querySelector('body').appendChild(notesMainDiv);
    

    // const withoutText = () => {

    // }




    const editBtn = notesMainDiv.querySelector('.edit');

    // Function to toggle between "Save" and "Edit" icons
    const toggleIcons = () => {
        if (editBtn.innerHTML === '<i title="Save" class="fas fa-save"></i>') {
            textarea.style.outline = 'none'; // or use 'initial'
            console.log('none');
        } else if (editBtn.innerHTML === '<i title="Edit" class="fas fa-edit"></i>') {
            textarea.style.outline = 'auto';
            // textarea.classList.add('auto');
            console.log('auto');
        }
        
        
        if (textarea.hasAttribute('readonly')) {
            // If textarea is currently readonly (in "Save" mode)
            textarea.removeAttribute('readonly');
            // textarea.classList.add('fa-save');
            editBtn.innerHTML = '<i title="Save" class="fas fa-save"></i>';
        } else {
            // If textarea is currently editable (in "Edit" mode)
            textarea.setAttribute('readonly', true);
            // textarea.classList.remove("fa-save");
            editBtn.innerHTML = '<i title="Edit" class="fas fa-edit"></i>';
        }
    };



    // toggleIcons();

    // // // Event listener for the edit button
    // editBtn.addEventListener('click', toggleIcons);


        // Event listener for the edit button
        editBtn.addEventListener('click', toggleIcons);


    if(text === ''){
        editBtn.innerHTML = '<i title="Save" class="fas fa-save"></i>';
        // textarea.style.outline = 'auto';
        // // textarea.classList.add('auto');
        // console.log('auto');
    }
    if(text !== '' && editBtn.innerHTML === '<i title="Edit" class="fas fa-edit"></i>'){
        // editBtn.innerHTML = '<i class="fas fa-save"></i>';
        textarea.style.outline = 'none';
        // // textarea.classList.add('auto');
        console.log('hello');
    }



    // Event listener for changes in the textarea
    textarea.addEventListener('input', updateLocalStorageData);



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
        updateLocalStorageData(); // Update local storage after deleting a note
    });





   





    

};



// Function to update local storage data
updateLocalStorageData = () => {
    const textareaElements = document.querySelectorAll('textarea');
    const notesArray = [];

    textareaElements.forEach(textarea => {
        const trimmedValue = textarea.value.trim();
        if (trimmedValue !== '') {
            notesArray.push(trimmedValue);
        }
    });


    localStorage.setItem('notesKey', JSON.stringify(notesArray));
};

// Load existing notes from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const storedNotes = localStorage.getItem('notesKey');
    const notesArray = storedNotes ? JSON.parse(storedNotes) : [];

    notesArray.forEach(note => addNewNote(note));
});


addButtton.addEventListener('click', () => {
    addNewNote();
    return false; // Prevent the default behavior of the click event
});


// addButtton.addEventListener('click',addNewNote)

// addButtton.addEventListener('click', (event) => {
//     event.preventDefault(); // Prevent the default behavior of the click event
//     addNewNote();
// });
