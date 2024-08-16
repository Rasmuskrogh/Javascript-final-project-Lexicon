const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const editButton = document.querySelector(".edit");
const accountForm = document.querySelector(".account-form");

const onLoad = () => {
  window.addEventListener("load", () => {
    console.log(admin);
    if (!admin) {
      window.location.href = "/login/login.html";
    }
  });
};

onLoad();
const admin = JSON.parse(localStorage.getItem("admin"));
const activeUser = JSON.parse(localStorage.getItem("loggedInUser"));

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

const editingInfo = () => {
  console.log(activeUser.password);
  editButton.addEventListener("click", () => {
    if (document.querySelector("#editAccount") === null) {
      const submitButton = document.createElement("button");
      submitButton.innerText = "Spara";
      accountForm.insertAdjacentElement("beforeend", submitButton);
      submitButton.id = "editAccount";
    }
    fname.disabled = false;
    lname.disabled = false;
    email.disabled = false;
    username.disabled = false;
    password.disabled = false;

    fname.value = activeUser.fname;
    lname.value = activeUser.lname;
    email.value = activeUser.email;
    username.value = activeUser.username;
    password.value = activeUser.password;

    submitButton.addEventListener("click", () => {
      editedData = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        username: username.value,
        password: password.value,
      };
      localStorage.setItem("loggedInUser", JSON.stringify(editedData));

      console.log(editedData);
    });
  });
};

settingInfo();
editingInfo();
