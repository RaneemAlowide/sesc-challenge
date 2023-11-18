var name;

// 1
function start(value) {
    try {
        if (typeof value !== 'string') {
            throw new Error('Your name is a string!');
        }

        name = value; 
        // Your code logic for clue2 goes here
        alert("🚀 Well done " + value + "!" + "\nTo uncover the next clue, change the background color to your favourite color, Make sure to keep your eyes safe! the lighter, the better! \n🤫🤫 : you can do this in 3 ways ")    

    } catch (error) {
        console.log('', error.message);
    }
}

// ----------------------------

// 2
function question(year) {
    if (year == 2021) {
        // Create a <div> to group the elements
        var challengeDiv = document.createElement('div');

        // Create a <p> tag with the specified text
        var newParagraph = document.createElement('p');
        newParagraph.textContent = 'Nice! Your next challenge is to name the shortcut version of the name of the best students club at UJ!';
        newParagraph.style.color = 'white'; // Set text color to white

        // Create an input text element for the question
        var answerInput = document.createElement('input');
        answerInput.type = 'text';
        answerInput.id = 'answerInput';
        answerInput.placeholder = 'Your answer';

        // Create a button to submit the answer
        var submitButton = document.createElement('button');
        submitButton.textContent = 'Submit Answer';
        submitButton.onclick = checkAnswer;

        // Append the elements to the <div>
        challengeDiv.appendChild(newParagraph);
        challengeDiv.appendChild(answerInput);
        challengeDiv.appendChild(submitButton);

        // Get the container with the class .challenges
        var challengesContainer = document.querySelector('.challenges');

        // Append the entire <div> to the challenges container
        challengesContainer.appendChild(challengeDiv);
    } else {
        alert("Try again ):")
    }
}



// Flag to track whether the correct answer has been given
let correctAnswerGiven = false;

function checkAnswer() {
    // Get the value from the input field
    var answer = document.getElementById('answerInput').value;

    // Check if the answer is "SESC"
    if (answer.toUpperCase() === 'SESC') {
        alert('Congratulations! You answered correctly.');
        // Set the flag to true
        correctAnswerGiven = true;
        // Call the function to start the image game
        startImageGame();
    } else {
        alert('Try again! Your answer is incorrect.');
    }
}

// Function to start the image game
function startImageGame() {
    // Number of images
    const numberOfImages = 10;

    // Height for the image container
    const imageContainerHeight = 200; // Adjust the height as needed

    // Get the container to hold the images
    const container = document.querySelector('.image-container');

    // Create a new div to hold the images
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image-game'); // Add a class for styling, if needed
    imageDiv.style.height = `${imageContainerHeight}px`; // Set the height

    // Create and append images to the imageDiv
    for (let i = 0; i < numberOfImages; i++) {
        // Create an image element
        const img = document.createElement('img');

        // Set the source for all images
        img.src = 'assets/sesc.png';

        // Set a unique ID for each image
        img.id = 'image' + i;

        // Set random position and size
        img.style.position = 'absolute';
        img.style.left = Math.random() * window.innerWidth + 'px';
        img.style.top = Math.random() * (window.innerHeight - imageContainerHeight) + 'px'; // Adjusted to stay within the container
        img.style.width = Math.random() * 100 + 'px'; // Adjust the range as needed
        img.style.height = 'auto';

        // Make only one image clickable
        if (i === 0) {
            img.addEventListener('click', function () {
                alert('You clicked the clickable image!');
            });
        }

        // Append the image to the imageDiv
        imageDiv.appendChild(img);
    }

    // Append the imageDiv to the .challenges container
    const challengesContainer = document.querySelector('.challenges');
    challengesContainer.appendChild(imageDiv);
}
