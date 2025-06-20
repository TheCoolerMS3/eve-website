document.getElementById("currentselect").innerHTML = `<img data-hover="<img src='media/pointer.png'>" src='media/pointer.png'>: `

function discord() {
  alert("My discord name is @lenenjoyer , I also have an account for Pxls called @greenwizardfan");
}
document.addEventListener("mouseover", function(event) {
  if (event.target.dataset.hover !== undefined) {
      document.getElementById("currentselect").innerHTML = `<img data-hover="<img src='media/pointer.png'>" src='media/pointer.png'>: ` + event.target.dataset.hover + "<br>"
  }
});