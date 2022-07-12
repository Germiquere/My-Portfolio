// function bgolor(){
//     const prueba = document.getElementById('luz');
//     prueba.style.animation = "intermitente 3s";
//     prueba.style.opacity = '1';
    
// }
//  function themeChange(){
//     document.body.classList.toggle('dark');
//     if(toggleIcon.src.includes('night.png')){

//         toggleIcon.src="assets/sun.png";
//         toggleText.textContent= "Light Mode";
//         prueba.style.opacity = '0';
//         prueba.style.animation = "none";
//     }
//     else{
        
//         toggleIcon.src= "assets/night.png";
//         toggleText.textContent= "Dark Mode";
//         prueba.style.animation = "intermitente 3s";
//         prueba.style.opacity = '1';
//     }
// }

const toggleTheme = document.getElementById("toggle");
const toggleIcon = document.getElementById("toggle-img");
const toggleText = document.getElementById("toggle-text");
const prueba = document.getElementById('luz');
const lampara = document.getElementById('lampara');
const indicator = document.getElementById("indicator");
const toggleNav = document.getElementById('toggle-nav');
const bar = document.getElementById('bar');
const navLink = document.querySelectorAll('.nav__link')

// toggleNav.addEventListener('click',()=>{
// bar.classList.toggle('show-menu');

// })
// function linkAction(){
//         bar.classList.remove('show-menu');
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))

// function sideBar(){
//         if(toggleNav.classList.toggle('active')){
//                 bar.style.top = "0px";      
//         }
//         else{
//                 bar.style.top = "-300px"; 
//         }      
// }


function themeChange(){
   if (document.body.classList.toggle('dark')){
    prueba.style.animation = "intermitente 3s";
    prueba.style.opacity = '1';
    indicator.style.left = "0px";
   }
   else{
    
        prueba.style.opacity = '0';
        prueba.style.animation = "none";
        indicator.style.left = "30px";

}
}
toggleTheme.addEventListener('click', themeChange );
lampara.addEventListener('click', themeChange);


// ======================== swiper =========================


