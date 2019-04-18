
//toggle menu feature

const toggleMenu = function() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("menu--open");
}
  
  const menuButton = document.querySelector(".menu-button");
  

  //Event Listeners

  menuButton.addEventListener("click", function() {
   toggleMenu();
  }); 


  