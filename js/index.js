
//toggle menu feature

const toggleMenu = function() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("menu--open");
}
  
const menuButton = document.querySelector(".menu-button");
  
  menuButton.addEventListener("click", function() {
   toggleMenu();
  }); 


  let nav = document.querySelector('nav');
  let navItems = nav.querySelectorAll('a');

  let newNavItem1 = document.createElement("a");
    newNavItem1.textContent = "Contact";
    newNavItem1.style.color = "white";
    newNavItem1.setAttribute("href", "contact.html"); 
    nav.appendChild(newNavItem1);