function saveUsername() {
  const name = document.getElementById("usernameInput").value.trim();
  if (name !== "") {
    localStorage.setItem("playerName", name);
    showMenu(name);
  } else {
    alert("Por favor ingresa tu nombre.");
  }
}

function showMenu(name) {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
  document.getElementById("playerName").innerText = name;
}

window.onload = () => {
  const savedName = localStorage.getItem("playerName");
  if (savedName) {
    showMenu(savedName);
  }
};
