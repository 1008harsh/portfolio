<script>
  function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
    
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();

    var isValid = true;

    // Name validation
    if (name.length < 3) {
      document.getElementById("name-error").textContent = "Name should be at least 3 characters long";
      nameInput.style.borderColor = "red";
      isValid = false;
    } else {
      document.getElementById("name-error").textContent = "";
      nameInput.style.borderColor = "";
    }

    // Email validation using a simple regex
    var emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("email-error").textContent = "Please enter a valid email address";
      emailInput.style.borderColor = "red";
      isValid = false;
    } else {
      document.getElementById("email-error").textContent = "";
      emailInput.style.borderColor = "";
    }

    // Message validation
    if (message.length < 10) {
      document.getElementById("message-error").textContent = "Message should be at least 10 characters long";
      messageInput.style.borderColor = "red";
      isValid = false;
    } else {
      document.getElementById("message-error").textContent = "";
      messageInput.style.borderColor = "";
    }

    return isValid;
  }
</script>
