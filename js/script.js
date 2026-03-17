window.addEventListener("load", () => {

  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.style.transition = "opacity 0.5s ease";
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);

  }, 3000); // 3 seconds

});



  /* SCROLL EFFECT */
  window.addEventListener("scroll", () => {
    document.querySelector(".navbar")
      .classList.toggle("scrolled", window.scrollY > 50);
  });

    /* MOBILE MENU */
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtn.classList.toggle("active");
  });


/* OPEN LOGIN */
function openLogin(){

document.getElementById("loginModal").style.display="flex";

isSignup=false;

updateForm();

}

/* CLOSE */
function closeLogin(){

document.getElementById("loginModal").style.display="none";

}

let isSignup=false;

/* SWITCH LOGIN / SIGNUP */

function toggleAuth(){

isSignup=!isSignup;

updateForm();

}

/* UPDATE FORM */

function updateForm(){

document.getElementById("formTitle").innerText=

isSignup?
"Create Your BioTech Account":
"Welcome Back";


document.getElementById("formSubtitle").innerText=

isSignup?
"Join BioTech Labs and start your research journey":
"Login to access your BioTech Labs research dashboard";


document.getElementById("submitBtn").innerText=

isSignup?
"Create Account":
"Login to Dashboard";


document.getElementById("switchText").innerText=

isSignup?
"Already have an account?":
"Don't have an account?";


document.querySelector(".switch-text a").innerText=

isSignup?
"Login":
"Sign up";


document.getElementById("fullName").style.display=

isSignup?"block":"none";


document.getElementById("confirmPassword").style.display=

isSignup?"block":"none";


document.getElementById("signupRole").style.display=

isSignup?"block":"none";


document.getElementById("loginRoleBox").style.display=

isSignup?"none":"block";

}

/* SUBMIT */

function handleAuthSubmit(event){

event.preventDefault();

if(!isSignup){

const role=document.getElementById("loginRole").value;

if(role==="admin"){
window.location.href="dashboard.html";
}

else if(role==="researcher"){
window.location.href="researcher-dashboard.html";
}

else if(role==="patient"){
window.location.href="patient-dashboard.html";
}

}

else{

window.location.href="404.html";

}

}

/* PASSWORD SHOW HIDE */

function togglePassword(){

const password=document.getElementById("loginPassword");

const eyeIcon=document.getElementById("eyeIcon");

if(password.type==="password"){

password.type="text";

eyeIcon.classList.replace("fa-eye-slash","fa-eye");

}

else{

password.type="password";

eyeIcon.classList.replace("fa-eye","fa-eye-slash");

}

}

/* OUTSIDE CLICK CLOSE */

window.addEventListener("click",function(e){

const modal=document.getElementById("loginModal");

if(e.target===modal){

modal.style.display="none";

}

});


//HERO SECTION
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

let index = 0;

function showSlide(i){

slides.forEach(slide => slide.classList.remove("active"));
dots.forEach(dot => dot.classList.remove("active"));

slides[i].classList.add("active");
dots[i].classList.add("active");

}

function autoSlide(){

index++;

if(index >= slides.length){
index = 0;
}

showSlide(index);

}

setInterval(autoSlide, 5000);

/* dot click */

dots.forEach((dot,i)=>{
dot.addEventListener("click",()=>{
index = i;
showSlide(index);
});
});