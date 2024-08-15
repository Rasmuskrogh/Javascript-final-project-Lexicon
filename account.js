admin = JSON.parse(localStorage.getItem("admin"));

const onLoad = () => {
  window.addEventListener("load", () => {
    console.log(admin);
    if (!admin) {
      window.location.href = "/login/login.html";
    }
  });
};

onLoad();
