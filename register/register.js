const regform = document.querySelector("#regform");
const createAccount = () => {
  regform.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("hej");
    let users = JSON.parse(localStorage.getItem("users"));

    if (users) {
      console.log(users);
    } else {
      users = [];
    }
    console.log(e.target.username.value);
    try {
      if (
        e.target.username.value.length < 3 ||
        e.target.username.value.length > 15
      ) {
        throw new Error(
          "Ditt användarnamn måste vara minst tre tecken långt och max 15 tecken långt"
        );
      } else if (e.target.password.value !== e.target.repeat.value) {
        throw new Error(
          "Ditt lösenord och ditt upprepade lösenord överenstämmer inte."
        );
      } else if (
        users.some((user) => user.username === e.target.username.value)
      ) {
        throw new Error(
          "This username already exists please choose a different one."
        );
      } else if (e.target.password.value < 6) {
        throw new Error(
          "You password is to short. It has tobe at least 6 characters long"
        );
      } else {
        const registrationData = {
          username: e.target.username.value,
          password: e.target.password.value,
          email: "",
          fname: "",
          lname: "",
        };
        users.push(registrationData);
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "/login/login.html";
      }
    } catch (error) {
      console.log(error);
    }
  });
};

createAccount();
