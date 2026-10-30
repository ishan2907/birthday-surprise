
// ==============================
// GENERATE TWINKLING STARS
// ==============================

const starsContainer = document.getElementById("stars");

const reducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (starsContainer && !reducedMotion) {

    for (let i = 0; i < 90; i++) {

        const star = document.createElement("span");

        star.classList.add("star");
        star.innerHTML = "✦";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.fontSize =
            Math.random() * 7 + 3 + "px";

        star.style.animationDelay =
            Math.random() * 4 + "s";

        star.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        starsContainer.appendChild(star);
    }
}


// ==============================
// FLOATING HEARTS
// ==============================

const heartContainer =
    document.getElementById("heartContainer");

function createHeart() {

    if (reducedMotion || !heartContainer) return;

    const heart = document.createElement("span");

    heart.classList.add("floating-heart");

    heart.innerHTML =
        Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 13 + 10 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 7 + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}


// Create hearts every 1.2 seconds
if (!reducedMotion) {
    setInterval(createHeart, 1200);
}


// ==============================
// SURPRISE BUTTON HEART BURST
// ==============================

const memoryButton =
    document.querySelector(".memory-button");

if (memoryButton) {

    memoryButton.addEventListener("click", function (event) {

        event.preventDefault();

        const destination = this.href;

        if (reducedMotion) {
            window.location.href = destination;
            return;
        }

        const rect = this.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 20; i++) {

            const heart = document.createElement("span");

            heart.classList.add("floating-heart");

            heart.style.position = "fixed";
            heart.style.bottom = "auto";

            heart.style.left = centerX + "px";
            heart.style.top = centerY + "px";

            heart.style.animation = "none";

            heart.innerHTML = "♥";

            heart.style.color = [
                "#e6a6b2",
                "#f6e7cf",
                "#d5b78f"
            ][i % 3];

            heart.style.transition = "all 1s ease";

            document.body.appendChild(heart);

            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 130 + 50;

            requestAnimationFrame(() => {

                heart.style.transform =
                    `translate(
                        ${Math.cos(angle) * distance}px,
                        ${Math.sin(angle) * distance}px
                    ) scale(1.5)`;

                heart.style.opacity = "0";

            });

            setTimeout(() => {
                heart.remove();
            }, 1100);
        }

        // Open the surprise page after the animation
        setTimeout(() => {
            window.location.href = destination;
        }, 850);

    });
}
