    document.querySelector('form').addEventListener('submit', (event) => {
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');

      const emailError = document.getElementById('email-error');
      const passwordError = document.getElementById('password-error');

      emailError.textContent = '';
      passwordError.textContent = '';

      if (!emailInput.value) {
        emailError.textContent = 'Email is required';
        event.preventDefault();
      }

      if (!passwordInput.value) {
        passwordError.textContent = 'Password is required';
        event.preventDefault();
      }
    });