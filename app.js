function signup(){
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      if(name && email && password){
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // check if email already exists
        let existingUser = users.find(u => u.email === email);

        if(existingUser){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'User already exists with this email!'
          });
        } else {
          let user = {name, email, password};
          users.push(user);
          localStorage.setItem("users", JSON.stringify(users));

          Swal.fire({
            icon: 'success',
            title: 'Signup Successful!',
            text: 'You can now login.'
          }).then(() => {
            window.location.href = "login.html";
          });
        }
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Missing Fields',
          text: 'Please fill all fields.'
        });
      }
    }

    // login

     function login(){
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      let users = JSON.parse(localStorage.getItem("users")) || [];

      let validUser = users.find(u => u.email === email && u.password === password);

      if(validUser){
        localStorage.setItem("isLoggedIn", "true");
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'Welcome back ' + validUser.name
        }).then(() => {
          window.location.href = "home.html";
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid email or password.'
        });
      }
    }