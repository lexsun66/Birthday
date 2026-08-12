// Wait until the page is fully loaded
window.addEventListener("load", () => {

    // Hide the loading screen after 3 seconds
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 3000);

});

// ==========================
// LETTER
// ==========================

const letter = `Dear Lex,

Happy 20th Birthday! ❤️

Today is all about celebrating you, and I just want you to know how incredibly happy I am to have you in my life.

Thank you for being such an amazing person and for always putting in so much effort for me. Please know that none of it ever goes unnoticed. I see it, I appreciate it, and I cherish every single thing you do.

Your presence in my life is a blessing, and I honestly feel so lucky to have you. You are not just my best friend—you are my most beloved best friend, someone who has a very special place in my heart. I love you a lot, and I hope you never forget how much you mean to me.

On this special day, I pray that God pours out His grace, favor, and endless mercies upon your life. May He guide your every step, bless every plan you have, and grant you success in everything you set your heart and mind to do.

May He protect you, strengthen you, and fill your life with joy, peace, good health, and countless blessings.

I wish you the happiest 20th birthday!

May you blow a thousand candles in the years ahead.

Thank you for being my best friend.

I love you so much.

❤️ HAPPY HAPPY BIRTHDAY LEX ❤️`;

let index = 0;

function typeLetter() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    if (index < letter.length) {

        typing.innerHTML += letter.charAt(index);

        index++;

        setTimeout(typeLetter, 35);

    }

}

// ==========================
// START BUTTON
// ==========================

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    typeLetter();

    confetti({
        particleCount:250,
        spread:180
    });

});

// ==========================
// MUSIC
// ==========================

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.textContent = "⏸ Pause Music";

    } else {

        music.pause();

        musicBtn.textContent = "🎵 Play Music";

    }

});

// ==========================
// GIFT
// ==========================

const giftBtn = document.getElementById("giftBtn");

giftBtn.addEventListener("click", () => {

    confetti({
        particleCount:500,
        spread:360
    });

    document.getElementById("giftMessage").innerHTML =
    "❤️ You are one of the greatest blessings in my life. I love you so much, Lex. Happy Birthday! ❤️";

});

// ==========================
// FLOATING HEARTS
// ==========================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize = (15 + Math.random()*20) + "px";

    heart.style.animationDuration = (4 + Math.random()*3) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },7000);

}

setInterval(createHeart,300);
