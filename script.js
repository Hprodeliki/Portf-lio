const backToTop = document.getElementById("subir")

backToTop.onclick = () => {
  document.documentElement.scroll({
    top:0,
    behavior: "smooth"
  })
}
window.onscroll = () =>{
  backToTop.hidden = !(document.documentElement.scrollTop > 200)
}


const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));
