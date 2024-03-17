document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // You can add your form submission logic here, like sending the data to a server or displaying a success message.
    alert("Form submitted successfully!");
    contactForm.reset(); // Optional: Reset the form after submission
  });
});
