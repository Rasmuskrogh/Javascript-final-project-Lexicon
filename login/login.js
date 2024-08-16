const loginform = document.querySelector("#loginform");
let users = JSON.parse(localStorage.getItem("users"));

//login a user with validation
const loginAccount = () => {
  loginform.addEventListener("submit", (e) => {
    e.preventDefault();
    if (users) {
      console.log(users);
    } else {
      users = [];
    }
    try {
      if (!e.target.username.value && !e.target.password.value) {
        console.log("var?");
        throw new Error("Both fields need to be filled");
      } else if (
        users.some(
          (user) =>
            user.password === e.target.password.value &&
            user.username === e.target.username.value
        )
      ) {
        console.log("här?");
        localStorage.setItem("admin", "true");

        const loggedinUser = users.find(
          (user) =>
            user.password === e.target.password.value &&
            user.username == e.target.username.value
        );
        localStorage.setItem("loggedInUser", JSON.stringify(loggedinUser));
        console.log(loggedinUser);

        window.location.href = "/index.html";
      } else {
        console.log("när?");
        throw new Error("Username and/or password don't match");
      }
    } catch (error) {
      if (document.querySelector("#errorMsg") !== null) {
        document.querySelector("#errorMsg").remove();
      }
      let errorMessage = document.createElement("h4");
      errorMessage.id = "errorMsg";
      errorMessage.innerText = error;
      loginform.insertAdjacentElement("afterbegin", errorMessage);
    }
  });
};

loginAccount();
