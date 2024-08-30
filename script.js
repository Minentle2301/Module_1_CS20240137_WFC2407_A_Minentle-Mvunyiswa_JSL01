function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    
    
    
      // Check if input starts with 'pet_' and followed by alphanumeric characters
      if (input.startsWith('pet_') && /^[a-zA-Z0-9]+$/.test(input.slice(4))) {
        result = "valid"; // Set result to valid
    } else {
        result = "syntax invalid"; // Set result to invalid
    }

    // Display the result in the result paragraph
    document.getElementById('result').innerText = result;
    console.log(result);
}

    

   


