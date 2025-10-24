function toggleMode() {
  const html = document.documentElement
  // pegar a tag da imagem
  const img = document.querySelector("#profile img")
  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    // trocar a imagem
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // trocar a imagem
    img.setAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/65673086?v=4"
    )
  }
}
