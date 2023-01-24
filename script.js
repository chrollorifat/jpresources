// Add active class to current page

const listItems = document.querySelectorAll(".list-item a");

for (let i = 0; i < listItems.length; i++) {
if (listItems[i].href === window.location.href) {
listItems[i].classList.add("active");
}
}

// Add hover effect to list items

for (let i = 0; i < listItems.length; i++) {
listItems[i].addEventListener("mouseover", function() {
this.style.color = "#ffa600";
});
listItems[i].addEventListener("mouseout", function() {
this.style.color = "#000000";
});
}
// Add responsive design to resources section

const resources = document.querySelector(".resources");

window.addEventListener("resize", function() {
if (window.innerWidth < 800) {
resources.style.flexDirection = "column";
resources.style.alignItems = "center";
} else {
resources.style.flexDirection = "row";
resources.style.alignItems = "flex-start";
}
});

if (window.innerWidth < 800) {
resources.style.flexDirection = "column";
resources.style.alignItems = "center";
} else {
resources.style.flexDirection = "row";
resources.style.alignItems = "flex-start";
}

// Add responsive design to specific resources section

const inside = document.querySelector(".inside");

window.addEventListener("resize", function() {
if (window.innerWidth < 800) {
inside.style.flexDirection = "column";
inside.style.alignItems = "center";
} else {
inside.style.flexDirection = "row";
inside.style.alignItems = "flex-start";
}
});

if (window.innerWidth < 800) {
inside.style.flexDirection = "column";
inside.style.alignItems = "center";
} else {
inside.style.flexDirection = "row";
inside.style.alignItems = "flex-start";
}