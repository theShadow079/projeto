function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
  const img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./source/Leozinho e eu na moto - lm.png");
  } else {
    img.setAttribute("src", "./source/Leozinho e eu na moto.jpg");
  }
}
