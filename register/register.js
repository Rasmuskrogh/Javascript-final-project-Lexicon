const regform = document.querySelector("#regform");

//Create a user with validation
const createAccount = () => {
  regform.addEventListener("submit", (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users"));

    if (!users) {
      users = [];
    }

    try {
      if (
        e.target.username.value.length < 3 ||
        e.target.username.value.length > 15
      ) {
        throw new Error(
          "Ditt användarnamn måste vara minst 3 tecken långt och max 15 tecken långt"
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
          "You password is to short. It has to be at least 6 characters long"
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
      if (document.querySelector("#errorMsg") !== null) {
        document.querySelector("#errorMsg").remove();
      }
      let errorMessage = document.createElement("h4");
      errorMessage.id = "errorMsg";
      errorMessage.innerText = error;
      regform.insertAdjacentElement("afterbegin", errorMessage);
    }
  });
};

createAccount();
