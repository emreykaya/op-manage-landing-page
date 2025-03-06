// SELECT DOM ELEMENTS
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const scrollBtn = document.querySelector("#scroll-btn");
const navbar = document.querySelector("#navbar");
const testimonials = document.querySelectorAll(".testimonials")
const testimonialsBtn = document.querySelector("#testimonialBtn")
let index = -1;

// EVENT - CLICK
document.addEventListener("click",(e) =>{
    if(e.target.id !== "menu-btn" && e.target.id !=="menu")  {
        btn.classList.toggle("open");
        nav.classList.toggle("hidden");
        nav.classList.toggle("flex");
    }else{
        btn.classList.toggle("open");
        nav.classList.toggle("hidden");
        nav.classList.toggle("flex");
    }
})

// EVENT - SCROLL
window.addEventListener("scroll",()=>{
    if(window.scrollY > 200){
        navbar.classList.add("bg-white");
        scrollBtn.classList.remove(".scrollTopHide");
        scrollBtn.classList.add("scrollTopShow");
    }else{
        scrollBtn.classList.remove("scrollTopShow");
        scrollBtn.classList.add(".scrollTopHide");
        navbar.classList.remove("bg-white");
    }
})

// TESTIMONIALS
function showTestimonials(index){
    testimonials.forEach((testimonial,i) =>{
        if( i !== index){
            testimonial.classList.remove("active");
            testimonial.classList.add("hidden");
        }else{
            testimonial.classList.add("active");
            testimonial.classList.remove("hidden");
        }
    })
}

testimonialsBtn.addEventListener("click",()=>{
    index = (index + 1 ) % testimonials.length;
    showTestimonials(index);
})









