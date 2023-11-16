function toggleMode() {
  //document é toda a página HTML. Acesso meu html através do documentElement
  const html = document.documentElement
  // no html, na lista de classe, contém 'light'? se sim remova
  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */
  // Mas há uma função do própria JS que faz a mesma coisa
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "assets/gabriel-light.png")
    img.setAttribute("alt", "Avatar light mode")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "assets/gabriel-dark.png")
    img.setAttribute("alt", "Avatar normal")
  }
}
