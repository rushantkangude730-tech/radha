/* =========================================
   ELEMENTS
========================================= */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const startBtn = document.getElementById("startBtn");

const openLetter = document.getElementById("openLetter");
const letterContent = document.getElementById("letterContent");

const popup = document.getElementById("popup");
const surpriseBtn = document.getElementById("surprise");
const closePopup = document.getElementById("closePopup");

const heartContainer = document.getElementById("heart-container");


/* =========================================
   START MUSIC
========================================= */

startBtn.addEventListener("click", () => {

    music.play();

    document.querySelector(".photo").scrollIntoView({

        behavior: "smooth"

    });

});


/* =========================================
   MUSIC BUTTON
========================================= */

let playing = true;

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "🎵";

    } else {

        music.pause();

        musicBtn.innerHTML = "🔇";

    }

});


/* =========================================
   LETTER
========================================= */

openLetter.addEventListener("click", () => {

    if (letterContent.style.display === "block") {

        letterContent.style.display = "none";

        openLetter.innerHTML = "Open Letter";

    } else {

        letterContent.style.display = "block";

        openLetter.innerHTML = "Close Letter";

        letterContent.scrollIntoView({

            behavior: "smooth"

        });

    }

});


/* =========================================
   TYPING EFFECT
========================================= */

new Typed("#typed", {

    strings: [

        "You may not realize it... ❤️",

        "But your smile can brighten someone's entire day.",

        "Thank you for being exactly who you are.",

        "I hope this little surprise made you smile. 🌸"

    ],

    typeSpeed: 45,

    backSpeed: 20,

    backDelay: 1800,

    loop: true

});


/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const hearts = [

        "❤️",

        "💖",

        "💕",

        "💗",

        "🌸"

    ];

    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 500);


/* =========================================
   FADE IMAGES ON SCROLL
========================================= */

const photos = document.querySelectorAll(".photo");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.3

});


photos.forEach(photo => {

    photo.style.opacity = "0";

    photo.style.transform = "translateY(80px)";
    photo.style.transition = "all 1s ease";

    observer.observe(photo);

});

/* =========================================
SURPRISE BUTTON
========================================= */

surpriseBtn.addEventListener("click", () => {

 popup.style.display = "flex";

 launchConfetti();

});


/* =========================================
CLOSE POPUP
========================================= */

closePopup.addEventListener("click", () => {

 popup.style.display = "none";

});


popup.addEventListener("click", (e) => {

 if (e.target === popup) {

     popup.style.display = "none";

 }

});


/* =========================================
CONFETTI
========================================= */

function launchConfetti() {

 const duration = 4000;

 const animationEnd = Date.now() + duration;

 const defaults = {

     startVelocity: 25,

     spread: 360,

     ticks: 80,

     zIndex: 9999

 };

 const interval = setInterval(function () {

     const timeLeft = animationEnd - Date.now();

     if (timeLeft <= 0) {

         clearInterval(interval);

         return;

     }

     confetti({

         ...defaults,

         particleCount: 8,

         origin: {

             x: Math.random(),

             y: Math.random() - 0.2

         }

     });

 }, 180);

}


/* =========================================
BUTTON RIPPLE EFFECT
========================================= */

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

 button.addEventListener("click", function (e) {

     const ripple = document.createElement("span");

     ripple.classList.add("ripple");

     const rect = button.getBoundingClientRect();

     ripple.style.left = (e.clientX - rect.left) + "px";
     ripple.style.top = (e.clientY - rect.top) + "px";

     button.appendChild(ripple);

     setTimeout(() => {

         ripple.remove();

     }, 600);

 });

});


/* =========================================
MUSIC BUTTON ROTATION
========================================= */

musicBtn.addEventListener("click", () => {

 musicBtn.style.transform = "rotate(360deg)";

 setTimeout(() => {

     musicBtn.style.transform = "rotate(0deg)";

 }, 500);

});


/* =========================================
HERO FADE
========================================= */

window.addEventListener("scroll", () => {

 const hero = document.querySelector(".hero");

 const scroll = window.scrollY;

 hero.style.opacity = 1 - scroll / 600;

});


/* =========================================
REASON CARD ANIMATION
========================================= */

const reasons = document.querySelectorAll(".reason");

const reasonObserver = new IntersectionObserver((entries) => {

 entries.forEach(entry => {

     if (entry.isIntersecting) {

         entry.target.animate(

             [

                 {

                     transform: "translateY(40px)",

                     opacity: 0

                 },

                 {

                     transform: "translateY(0)",

                     opacity: 1

                 }

             ],

             {

                 duration: 700,

                 easing: "ease-out",

                 fill: "forwards"

             }

         );

     }

 });

}, {

 threshold: 0.3

});


reasons.forEach(reason => {

 reasonObserver.observe(reason);

});


/* =========================================
IMAGE SCALE ON VIEW
========================================= */

const images = document.querySelectorAll(".photo img");

const imageObserver = new IntersectionObserver((entries) => {

 entries.forEach(entry => {

     if (entry.isIntersecting) {

         entry.target.animate(

             [

                 {

                     transform: "scale(.85)",

                     opacity: 0

                 },

                 {

                     transform: "scale(1)",

                     opacity: 1

                 }

             ],

             {

                 duration: 1000,

                 fill: "forwards"

             }

         );

     }

 });

}, {

 threshold: 0.4

});


images.forEach(image => {

 imageObserver.observe(image);

});


/* =========================================
GOOD MORNING / GOOD EVENING MESSAGE
========================================= */

const hour = new Date().getHours();

const heroTitle = document.querySelector(".glass h3");

if (hour < 12) {

 heroTitle.innerHTML = "Good Morning ☀️";

}

else if (hour < 18) {

 heroTitle.innerHTML = "Good Afternoon 🌸";

}

else {

 heroTitle.innerHTML = "Good Evening 🌙";

}


/* =========================================
PREVENT DOUBLE TAP ZOOM
========================================= */

let lastTouchEnd = 0;

document.addEventListener("touchend", function (event) {

 const now = new Date().getTime();

 if (now - lastTouchEnd <= 300) {

     event.preventDefault();

 }

 lastTouchEnd = now;

}, false);


/* =========================================
CONSOLE MESSAGE ❤️
========================================= */

console.log(

`❤️

This website was made with love.

Hope it brings a smile.

`
);