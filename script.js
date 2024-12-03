// Function to highlight all <strong> elements
function highlight() {
  const boldWords = document.querySelectorAll('strong');
  boldWords.forEach(word => {
    word.style.color = 'green'; // Change color to green
  });
}

// Function to revert the color of <strong> elements
function return_normal() {
  const boldWords = document.querySelectorAll('strong');
  boldWords.forEach(word => {
    word.style.color = 'black'; // Revert color to black
  });
}
