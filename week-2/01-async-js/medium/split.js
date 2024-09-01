const fs = require('fs');

function cleanExtraSpaces(text) {
  // Regular expression to match one or more whitespace characters
  const regex = /\s+/g;
  return text.replace(regex, ' '); // Replace with a single space
}

function cleanFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    
    const cleanedText = cleanExtraSpaces(data);
    fs.writeFile(filePath, cleanedText, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
				console.log(cleanedText);
        console.log('File cleaned successfully!');
      }
    });
  });
}

// Example usage
const filePath = 'your_file.txt'; // Replace with your actual file path
cleanFile(filePath);
