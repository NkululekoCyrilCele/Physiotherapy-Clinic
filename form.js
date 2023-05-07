// Get the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate the form fields
  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields');
    return;
  }

  // Send the form data to the server (example)
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({ name, email, message }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      // Handle the server response (example)
      if (data.success) {
        alert('Message sent successfully');
        form.reset();
      } else {
        alert('Message failed to send');
      }
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred while sending the message');
    });
});