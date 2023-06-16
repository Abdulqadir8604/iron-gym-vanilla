const bookButton = document.querySelector(".submit");

function submit(event) {
  event.preventDefault(); // Prevent form submission and page refresh

  // Access the form fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const message = document.getElementById('message').value;

  // Make a POST request to the server to send the form data
  fetch('http://irongymemailserver.abdulqadir8604.repl.co/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      name,
      email,
      date,
      time,
      message
    }).toString()
  })
      .then((response) => {
        if (response.redirected) {
          // Redirect to the homepage if form submission is successful
          window.location.href = "https://abdulqadir8604.github.io/iron-gym-vanilla/#appointment";
        }
      })
      .catch((error) => console.log('Error submitting form:', error));
}

bookButton.addEventListener('click', submit);
