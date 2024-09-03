const fileUrl = 'https://raw.githubusercontent.com/kokos-labs/opencdo-db/main/safe.txt';
const textToCheck = 'https://chat.openai.com/hi';  // Replace this with the text you want to search for

// Fetch the file content
fetch(fileUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();  // Get the response text
  })
  .then(data => {
    // Split the content into lines
    const lines = data.split('\n');

    // Find the index of the first line that includes the textToCheck
    const index = lines.findIndex(line => line.includes(textToCheck));

    if (index !== -1) {
      console.log(`Text "${textToCheck}" found at line ${index}: "${lines[index]}"`);
    } else {
      console.log(`Text "${textToCheck}" not found in the file.`);
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  

  //if(trusted){
  //  return "<img src='static/1.png' aria-hidden='true'>"
  //}