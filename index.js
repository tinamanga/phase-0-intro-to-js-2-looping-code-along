// Code your solutions in this file
//writeCards() function
function writeCards(names, event) {
    const messages = []; // This will store the thank-you messages
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message); // Add the message to the array
    }
    return messages; // Return the array of messages
  }
  
// countDown() function using while loop
  function countDown(start) {
    let count = start;
    while (count >= 0) {
      console.log(count);
      count--; // Decrement count to move towards 0
    }
  }
  
  