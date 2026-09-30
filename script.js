/* =========================
   FLOATING HEARTS
========================= */

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 15 + 12 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 6 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 11000);
}

setInterval(createHeart, 900);


/* =========================
   OPEN LETTER
========================= */

function openLetter() {

    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   MUSIC
========================= */

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

musicBtn.addEventListener("click", function () {

    if (musicPlaying) {

        music.pause();

        musicBtn.innerHTML = "♪";

        musicPlaying = false;

    } else {

        music.play().catch(() => {
            console.log("Music needs user interaction.");
        });

        musicBtn.innerHTML = "♫";

        musicPlaying = true;

    }

});


/* =========================
   FINAL SURPRISE
========================= */

function celebrate() {

    const popup = document.getElementById("popup");

    popup.classList.add("active");

    createCelebration();

}


/* =========================
   CLOSE POPUP
========================= */

function closePopup() {

    document.getElementById("popup")
        .classList.remove("active");

}


/* =========================
   CLICK OUTSIDE POPUP
========================= */

document.getElementById("popup").addEventListener("click", function(event) {

    if (event.target === this) {

        closePopup();

    }

});


/* =========================
   BIRTHDAY CONFETTI
========================= */

function createCelebration() {

    const symbols = [
        "♡",
        "♥",
        "✦",
        "✧",
        "✨"
    ];

    for (let i = 0; i < 60; i++) {

        const item = document.createElement("div");

        item.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        item.style.position = "fixed";

        item.style.left = Math.random() * 100 + "vw";

        item.style.top = "-30px";

        item.style.zIndex = "300";

        item.style.fontSize =
            Math.random() * 20 + 12 + "px";

        item.style.color =
            Math.random() > 0.5
            ? "#c96f82"
            : "#e9a6b2";

        item.style.pointerEvents = "none";

        document.body.appendChild(item);

        const duration =
            Math.random() * 2000 + 2500;

        item.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-in"
            }
        );

        setTimeout(() => {

            item.remove();

        }, duration);

    }

}