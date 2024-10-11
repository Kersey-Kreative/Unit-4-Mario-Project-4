function myPyramid() {
    clearError(); // Clear previous errors before processing new input

    // Get the user input for height of their pyramid
    let height = document.getElementById("height").value;

    // Check if input is empty
    if (height.trim() === "") {
        displayError("Please provide a height.");
        return;
    }

    height = parseInt(height, 10); // Convert input to an integer

    // Validate height - must be a positive non-zero integer
    if (isNaN(height) || height <= 0) {
        displayError("Please enter a valid height greater than 0");
        return;
    }

    let rowStr = "";

    // Generate pyramid rows
    for (let i = 1; i <= height; i++) {
        // Print spaces
        for (let j = 0; j < height - i; j++) {
            rowStr += ". ";
        }
        // Print blocks
        for (let k = 0; k < i; k++) {
            rowStr += "#";
        }
        rowStr += "\n"; // New line for the next row
    }

    // Display the pyramid in the designated table
    let element = document.getElementById("pyramid");
    element.innerText = rowStr; // Set the inner text to the generated pyramid

    console.log(rowStr); // Output to the console for debugging
}

function displayError(message) {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = message;
    errorMessage.style.display = "block"; // Show error message
    document.getElementById("height").classList.add("invalid-field"); // Add invalid class
}

function clearError() {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = ''; // Clear the error message text
    errorMessage.style.display = "none"; // Hide error message
    document.getElementById("height").classList.remove("invalid-field"); // Remove invalid class
}