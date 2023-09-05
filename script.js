document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  hamburgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
  });
});


// turning of hamburger menu after navigation
var navlink = document.querySelector(".nav-links");
var hamburgerMenu = document.querySelector(".hamburger-menu");
console.log(navlink.children.length);

function closeHamburger() {
 
    navlink.classList.remove("active");
    hamburgerMenu.classList.remove("active");

}



// testimonial 

// Function to submit a testimonial
function submitTestimonial() {

  let textArea = document.querySelector('#testimonialText');
  let authorName=document.querySelector('#authorName');


  
   if(textArea.value=='' && authorName.value==''){
    let creatingElem=document.createElement('div');
    creatingElem.innerHTML='Please fill out all the required fields before submitting the form';
    var form = document.querySelector(".testimonial-form");
    form.appendChild(creatingElem);
    creatingElem.style.alignSelf='center';
    setTimeout(()=>{
     form.removeChild(creatingElem);
    },5000)
 }


 else if(textArea.value==''){
     let creatingElem=document.createElement('div');
     creatingElem.innerHTML='Please enter your experience ....';
     var form = document.querySelector(".testimonial-form");
     form.appendChild(creatingElem);
     creatingElem.style.alignSelf='center';
     setTimeout(()=>{
      form.removeChild(creatingElem);
     },5000)
  }

   else if(authorName.value==''){
     let creatingElem=document.createElement('div');
     creatingElem.innerHTML='Please enter Your name...';
     var form = document.querySelector(".testimonial-form");
     form.appendChild(creatingElem);
     creatingElem.style.alignSelf='center';
     setTimeout(()=>{
      form.removeChild(creatingElem);
     },5000)
  }

   else if(authorName.value && textArea.value){
     let creatingElem=document.createElement('div');
     creatingElem.innerHTML=`Thank you for your submission ❤️ !`;
     var form = document.querySelector(".testimonial-form");
     form.appendChild(creatingElem);
     creatingElem.style.alignSelf='center';
     setTimeout(()=>{
      form.removeChild(creatingElem);
     },5000)
     textArea.value='';
     authorName.value='';
  }

}
