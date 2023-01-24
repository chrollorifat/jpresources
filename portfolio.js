// JavaScript for Admin Login

const loginForm = document.querySelector("#admin-login-form");
const loginBtn = document.querySelector("#admin-login-btn");
const logoutBtn = document.querySelector("#admin-logout-btn");
const adminSection = document.querySelector("#admin-section");

loginBtn.addEventListener("click", function(e) {
e.preventDefault();
const username = loginForm.username.value;
const password = loginForm.password.value;

// check if username and password match admin credentials
if (username === "admin" && password === "password") {
    adminSection.style.display = "block";
    loginForm.reset();
} else {
    alert("Incorrect username or password!");
}

});

logoutBtn.addEventListener("click", function() {
adminSection.style.display = "none";
});

// JavaScript for Skills Bar Animation

const skillsContainer = document.querySelector(".skills-container");

window.addEventListener("scroll", function() {
let skillsContainerCoords = skillsContainer.getBoundingClientRect();
let skillsContainerHeight = skillsContainerCoords.height;
let windowHeight = document.documentElement.clientHeight;

if (skillsContainerCoords.top < windowHeight && skillsContainerCoords.bottom > 0) {
    let skillBars = document.querySelectorAll(".skill-bar");
    skillBars.forEach(function(skillBar) {
        skillBar.style.width = skillBar.dataset.percentage;
    });
}

});

// JavaScript for Responsive Navigation

const navigation = document.querySelector("header nav");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", function() {
navigation.classList.toggle("active");
});

// JavaScript for Contact Form Validation

const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit",function(e) {
    e.preventDefault();
    let isValid = true;
    
    // check if name field is filled
    if (contactForm.name.value === "") {
        isValid = false;
        alert("Please enter your name!");
    }
    
    // check if email field is filled and in valid format
    if (contactForm.email.value === "") {
        isValid = false;
        alert("Please enter your email!");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactForm.email.value)) {
        isValid = false;
        alert("Please enter a valid email address!");
    }
    
    // check if message field is filled
    if (contactForm.message.value === "") {
        isValid = false;
        alert("Please enter a message!");
    }
    
    if (isValid) {
        alert("Thank you for your message! I will get back to you soon.");
        contactForm.reset();
    }
    
    });
    
    // JavaScript for List Item Hover Effect
    
    const listItems = document.querySelectorAll("#list li, .inside .list li");
    
    for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseover", function() {
    this.style.color = "#ffa600";
    });
    
    listItems[i].addEventListener("mouseout", function() {
        this.style.color = "#000000";
    });
    
    }
    
    // JavaScript for Responsive Layout
    
    const inside = document.querySelector(".inside");
    const windowWidth = window.innerWidth;
    
    if (windowWidth <= 768) {
    inside.style.flexDirection = "column";
    inside.style.alignItems = "center";
    } else {
    inside.style.flexDirection = "row";
    inside.style.alignItems = "flex-start";
    }
    
    window.addEventListener("resize", function() {
    const windowWidth = window.innerWidth;
    
    if (windowWidth <= 768) {
        inside.style.flexDirection = "column";
        inside.style.alignItems = "center";
    } else {
        inside.style.flexDirection = "row";
        inside.style.alignItems = "flex-start";
    }
    
    });
    
    // JavaScript for Admin Login
    
    const loginForm = document.querySelector("#admin-login-form");
    const loginBtn = document.querySelector("#admin-login-btn");
    const logoutBtn = document.querySelector("#admin-logout-btn");
    const adminSection = document.querySelector("#admin-section");
    
    loginBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    // check if username and password match admin credentials
    if (username === "admin" && password === "password") {
        adminSection.style.display = "block";
        loginForm.reset();
        } else {
        alert("Incorrect username or password!");
        }
        });
        
        logoutBtn.addEventListener("click", function() {
        adminSection.style.display = "none";
        });
        
        // JavaScript for Personal Information Edit
        
        const personalInfo = document.querySelector("#personal-info");
        const editBtn = document.querySelector("#edit-info-btn");
        const saveBtn = document.querySelector("#save-info-btn");
        
        editBtn.addEventListener("click", function() {
        personalInfo.contentEditable = "true";
        editBtn.style.display = "none";
        saveBtn.style.display = "block";
        });
        
        saveBtn.addEventListener("click", function() {
        personalInfo.contentEditable = "false";
        saveBtn.style.display = "none";
        editBtn.style.display = "block";
        });// JavaScript for Image Gallery

        const gallery = document.querySelector(".gallery");
        const images = document.querySelectorAll(".gallery img");
        const modal = document.querySelector(".modal");
        const modalImg = document.querySelector(".modal img");
        const closeBtn = document.querySelector(".modal .close-btn");
        
        images.forEach(function(img) {
        img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        });
        });
        
        closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        });
        
        modal.addEventListener("click", function(e) {
        if (e.target === modal) {
        modal.style.display = "none";
        }
        });
        
        // JavaScript for Scroll to Top
        
        const scrollBtn = document.querySelector("#scroll-top-btn");
        
        window.addEventListener("scroll", function() {
        if (window.pageYOffset > 100) {
        scrollBtn.style.display = "block";
        } else {
        scrollBtn.style.display = "none";
        }
        });
        
        scrollBtn.addEventListener("click", function() {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
        });
        
        // JavaScript for Admin Login
        
        const loginForm = document.querySelector("#admin-login-form");
        const loginBtn = document.querySelector("#admin-login-btn");
        const logoutBtn = document.querySelector("#admin-logout-btn");
        const adminSection = document.querySelector("#admin-section");
        
        loginBtn.addEventListener("click", function(e) {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;
        
        // check if username and password match admin credentials
        if (username === "admin" && password === "password") {
            adminSection.style.display = "block";
            loginForm.reset();
        } else {
            alert("Incorrect username or password!");
        }
        
        });
        
        logoutBtn.addEventListener("click", function() {
        adminSection.style.display = "none";
        });
        
        // JavaScript for Portfolio Item Filtering
        
        const portfolioItems = document.querySelectorAll(".portfolio-item");
        const filterButtons = document.querySelectorAll(".filter-btn");
        
        filterButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
        const filter = this.dataset.filter;
        portfolioItems.forEach(function(item) {
        if (filter === "all") {
        item.style.display = "block";
        } else {
        if (item.classList.contains(filter)) {
        item.style.display = "block";
        } else {
        item.style.display = "none";
        }
        }
        });
        });
        });
        
        // JavaScript for Modal for Portfolio Item
        
        const portfolioModal = document.querySelector(".portfolio-modal");
        const portfolioItems2 = document.querySelectorAll(".portfolio-item");
        const closeModalBtn = document.querySelector(".portfolio-modal .close-btn");
        
        portfolioItems2.forEach(function(item) {
        item.addEventListener("click", function() {
        portfolioModal.style.display = "block";
        // insert item information into modal
        });
        });
        
        closeModalBtn.addEventListener("click", function() {
        portfolioModal.style.display = "none";
        });
        
        portfolioModal.addEventListener("click", function(e) {
        if (e.target === portfolioModal) {
        portfolioModal.style.display = "none";
        }
        });
        
        // JavaScript for Admin Login
        
        const loginForm = document.querySelector("#admin-login-form");
        const loginBtn = document.querySelector("#admin-login-btn");
        constlogoutBtn = document.querySelector("#admin-logout-btn");
        const adminSection = document.querySelector("#admin-section");
        
        loginBtn.addEventListener("click", function(e) {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;
        
        // check if username and password match admin credentials
        if (username === "admin" && password === "password") {
            adminSection.style.display = "block";
            loginForm.reset();
        } else {
            alert("Incorrect username or password!");
        }
        
        });
        
        logoutBtn.addEventListener("click", function() {
        adminSection.style.display = "none";
        });
        
        // JavaScript for Skills Progress Bar
        
        const skills = document.querySelectorAll(".skill");
        
        skills.forEach(function(skill) {
        const skillValue = skill.dataset.value;
        const skillBar = skill.querySelector(".skill-bar");
        
        skillBar.style.width = skillValue + "%";
        
        });
        
        // JavaScript for Testimonials Slider
        
        const testimonials = document.querySelectorAll(".testimonial");
        const prevBtn = document.querySelector("#prev-btn");
        const nextBtn = document.querySelector("#next-btn");
        let currentTestimonial = 0;
        
        testimonials[currentTestimonial].style.display = "block";
        
        prevBtn.addEventListener("click", function() {
        testimonials[currentTestimonial].style.display = "none";
        currentTestimonial--;
        if (currentTestimonial < 0) {
        currentTestimonial = testimonials.length - 1;
        }
        testimonials[currentTestimonial].style.display = "block";
        });
        
        nextBtn.addEventListener("click", function() {
        testimonials[currentTestimonial].style.display = "none";
        currentTestimonial++;
        if (currentTestimonial === testimonials.length) {
        currentTestimonial = 0;
        }
        testimonials[currentTestimonial].style.display = "block";
        });
        
        // JavaScript for Mobile Navigation
        
        const mobileNav = document.querySelector("#mobile-nav");
        const navBar = document.querySelector("nav");
        const closeNavBtn = document.querySelector("#close-nav-btn");
        
        mobileNav.addEventListener("click", function() {
        navBar.style.display = "block";
        });
        
        closeNavBtn.addEventListener("click", function() {
        navBar.style.display = "none";
        });
        
        // JavaScript for Form Validation
        
        const contactForm = document.querySelector("#contact-form");
        
        contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const name = contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.message.value;
        
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields!");
        } else {
            alert("Thank you for your message! I will respond as soon as possible.");
            contactForm.reset();
        }
        
        });
        
        // JavaScript for Typing Effect
        
        const text = document.querySelector("#typing-text");
        const textArray = ["Web Developer", "Designer", "Photographer"];
        let textIndex = 0;
        let letterIndex = 0;
        
        setInterval(function() {
        if (letterIndex === textArray[textIndex].length) {
        textIndex++;
        letterIndex = 0;
        }
        if (textIndex === textArray.length) {
        textIndex = 0;
        }
        text.textContent += textArray[textIndex][letterIndex];
        letterIndex++;
        }, 150);
        
        // JavaScript for Progress Bar
        
        const progressBar = document.querySelector("#progress-bar");
        
        window.addEventListener("scroll", function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
        });
        
        // JavaScript for Light/Dark Mode Switch
        
        const switchBtn = document.querySelector("#mode-switch-btn");
        const body = document.querySelector("body");
        const currentTheme = localStorage.getItem("theme");
        
        if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === "light-mode") {
        switchBtn.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
        switchBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
        }