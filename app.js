function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-message');
  
    const validUser = "Satyam";
    const validPass = "99";
  
    if (user === validUser && pass === validPass) {
      window.location.href = "portfolio.html";
    } else {
      errorMsg.textContent = "Incorrect username or password!";
    }
  }
  