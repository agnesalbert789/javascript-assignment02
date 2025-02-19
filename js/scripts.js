// constants for query selector
const studentIdElement = document.getElementById('myStudentId');
const customNumberInput = document.getElementById('customNumber');
const customColorButton = document.querySelector('.custColor');
const randomColorButton = document.querySelector('.randColor');
const selectImage = document.getElementById('imageSelect');
const displayImage = document.getElementById('images');

// function to change bg color from user input and add student id
const studentId = '200588943';
function changeCustomColor() {
    const userInput = parseInt(customNumberInput.value);
    let backgroundColor;
    if (userInput < 0 || userInput > 100) {
        backgroundColor = 'red';
    } else if (userInput >= 0 && userInput < 20) {
        backgroundColor = 'green';
    } else if (userInput >= 20 && userInput < 40) {
        backgroundColor = 'blue';
    } else if (userInput >= 40 && userInput < 60) {
        backgroundColor = 'orange';
    } else if (userInput >= 60 && userInput < 80) {
        backgroundColor = 'purple';
    } else if (userInput >= 80 && userInput <= 100) {
        backgroundColor = 'yellow';
    }
    document.body.style.backgroundColor = backgroundColor;
    studentIdElement.textContent = studentId;
}
// function to change bg color from random no.
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let backgroundColor;
    if (randomNumber < 0 || randomNumber > 100) {
        backgroundColor = 'red';
    } else if (randomNumber >= 0 && randomNumber < 20) {
        backgroundColor = 'green';
    } else if (randomNumber >= 20 && randomNumber < 40) {
        backgroundColor = 'blue';
    } else if (randomNumber >= 40 && randomNumber < 60) {
        backgroundColor = 'orange';
    } else if (randomNumber >= 60 && randomNumber < 80) {
        backgroundColor = 'purple';
    } else if (randomNumber >= 80 && randomNumber <= 100) {
        backgroundColor = 'yellow';
    }
    document.body.style.backgroundColor = backgroundColor;
}

// function to generate options for select list
const imageSources = ['img1.jpg', 'img2.jpg', 'img3.jpg','img4.jpg', 'img5.jpg'];

function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array
    if (selectImage.children.length === 1) {
        imageSources.forEach((source, index) => {
            const option = document.createElement('option');
            option.value = `img/${source}`;
            option.textContent = `Image ${index + 1}`;
            selectImage.appendChild(option);
        });
    }
}

// function to change image
function changeImage() {
    const selectedValue = selectImage.value;
    displayImage.src = selectedValue;
}


// event listeners for on click event of buttons and select
customColorButton.addEventListener('click', changeCustomColor);
randomColorButton.addEventListener('click', changeRandomColor);
// event listeners for on change event of select

selectImage.addEventListener('change', changeImage);
addList();