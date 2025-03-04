document.addEventListener("DOMContentLoaded", function () {
  var includes = document.querySelectorAll("include");
  includes.forEach(function (include) {
    var file = include.getAttribute("src");
    if (file) {
      fetch(file)
        .then((response) => response.text())
        .then((data) => {
          include.insertAdjacentHTML("afterend", data);
          include.remove();
        })
        .catch((error) => console.error("Error loading include file:", error));
    }
  });
});
