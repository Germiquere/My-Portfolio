
const toggleTheme = document.getElementById("toggle");
const toggleIcon = document.getElementById("toggle-img");
const toggleText = document.getElementById("toggle-text");
const prueba = document.getElementById('luz');
const lampara = document.getElementById('lampara');
const indicator = document.getElementById("indicator");
const toggleNav = document.getElementById('toggle-nav');
const bar = document.getElementById('bar');
const navLink = document.querySelectorAll('.nav__link');
const imgMyPortfolio = document.getElementById('img-my-portfolio');


function themeChange(){
   if (document.body.classList.toggle('dark')){
        prueba.style.animation = "intermitente 3s";
        prueba.style.opacity = '1';
        indicator.style.left = "0px";
        imgMyPortfolio.src='./assets/portfolio.png';
        localStorage.setItem('dark-mode', 'true');
   }
   else{
    
        prueba.style.opacity = '0';
        prueba.style.animation = "none";
        indicator.style.left = "30px";
        imgMyPortfolio.src='./assets/portfolio-day.png'; 
        localStorage.setItem('dark-mode', 'false');
}
}
if(localStorage.getItem('dark-mode') === 'true'){
     document.body.classList.add('dark');
     prueba.style.animation = "intermitente 3s";
        prueba.style.opacity = '1';
        indicator.style.left = "0px";
        imgMyPortfolio.src='./assets/portfolio.png';
}
else{
     document.body.classList.remove('dark');
     prueba.style.opacity = '0';
        prueba.style.animation = "none";
        indicator.style.left = "30px";
        imgMyPortfolio.src='./assets/portfolio-day.png';
}
window.addEventListener('scroll', ()=>{
     let scroll = document.querySelector('.scroll-top');
     scroll.classList.toggle('active',window.scrollY > 800)

})
function scrollToTop(){
     window.scrollTo({
          top:0
     })
}

toggleTheme.addEventListener('click', themeChange);
lampara.addEventListener('click', themeChange);


