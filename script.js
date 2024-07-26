document
  .getElementById("coordinates")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const input = event.target.value.trim();
      const targetCoords = "351600, 593400";

      if (input === targetCoords) {
        document.querySelector(".search-container").style.display = "none";
        document.querySelector(".message-container").classList.add("active");
      } else {
        alert("Incorrecto, Inténtalo, de, nuevo.");
      }
    }
  });
