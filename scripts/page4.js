function submitForm() {
    // Get form data
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!fullName || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Here, you can send the data to your server for further processing
    // For demonstration purposes, we'll just log the data to the console
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Message:', message);

    // You can add an AJAX request to send the data to your server using fetch or other libraries
    // fetch('/submit-contact-form', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ fullName, email, message }),
    // })
    // .then(response => response.json())
    // .then(data => console.log('Server Response:', data))
    // .catch(error => console.error('Error:', error));

    // Clear the form after submission (optional)
    document.getElementById('contactForm').reset();
}

function makePayment() {
    const amount = document.getElementById('amount').value;

    // Call server-side endpoint to initiate payment
    $.post('/initiate-payment', { amount }, function(response) {
        // Redirect to M-Pesa payment page or handle the response accordingly
        window.location.href = response.paymentUrl;
    });
}