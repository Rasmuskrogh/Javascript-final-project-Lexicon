const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const editButton = document.querySelector(".edit");
const accountForm = document.querySelector(".account-form");
const logoutButton = document.querySelector("#logout-button");
const admin = JSON.parse(localStorage.getItem("admin"));
const activeUser = JSON.parse(localStorage.getItem("loggedInUser"));
const users = JSON.parse(localStorage.getItem("users"));

//Making use the user has admin rights. If not sends the user to the login page.
const onLoad = () => {
  window.addEventListener("load", () => {
    console.log(admin);
    if (!admin) {
      window.location.href = "/login/login.html";
    }
  });
};

onLoad();

//Filling the account fields with info from localStorage
const settingInfo = () => {
  fname.placeholder = activeUser.fname;
  lname.placeholder = activeUser.lname;
  email.placeholder = activeUser.email;
  username.placeholder = activeUser.username;
  console.log(activeUser.password.length);
  for (let i = 0; i < activeUser.password.length; i++) {
    password.placeholder = password.placeholder + "*";
  }
};

//Editing info from the account fields and setting them in local storage
const editingInfo = () => {
  console.log(activeUser.password);

  //Creating the submit button
  editButton.addEventListener("click", () => {
    if (document.querySelector("#editAccount") === null) {
      const submitButton = document.createElement("button");
      submitButton.innerText = "Spara";
      accountForm.insertAdjacentElement("beforeend", submitButton);
      submitButton.id = "editAccount";
    }

    //remving the logout button
    logoutButton.remove();

    //Enableing the input fields
    fname.disabled = false;
    lname.disabled = false;
    email.disabled = false;
    username.disabled = false;
    password.disabled = false;

    const key = activeUser.username;

    //Setting the values from local storage in the input fields
    fname.value = activeUser.fname;
    lname.value = activeUser.lname;
    email.value = activeUser.email;
    username.value = activeUser.username;
    password.value = activeUser.password;

    console.log(key);

    //Resetting the info in local Storage for "loggedInUser" and "users"
    submitButton.addEventListener("click", () => {
      const editedData = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        username: username.value,
        password: password.value,
      };
      localStorage.setItem("loggedInUser", JSON.stringify(editedData));

      const index = users.findIndex((user) => user.username === key);
      if (index !== -1) {
        users[index] = editedData;
        localStorage.setItem("users", JSON.stringify(users));
      }

      console.log(loggedinUser);

      console.log(editedData);
    });
  });
};

//Logging out the user by removing the loggedInUser value, setting admin to false and moving th euser back to the login page
const logout = () => {
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    localStorage.setItem("admin", "false");
    window.location.href = "/login/login.html";
  });
};

settingInfo();
editingInfo();
