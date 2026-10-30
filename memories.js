// Replace these sample lines with the exact messages you want to display.
const messages = [
    { side: "left", text: "What are we ? I love you , what about you ? I love you too . Then we are a couple. ❤️", time: "A little reminder" },
    { side: "right", text: "Only one girl will be happy ,and that will be you ❤️", time: "One of my favourites" },
    { side: "left", text: "I would rather study whole asoc 🥺 rather than making you ask someone else❤️", time: "feeling" },
    { side: "right", text: "I just feel comfortable with you. ❤️", time: "The best feeling" },
    { side: "left", text: "Ishu knows how much I care for him , I am always there for you I love you so much. ❤️", time: "Much  needed" },
    { side: "right", text: "You're exactly what I wanted my Man to be , What else could I ask for🥺❤️", time: "Still true" },
    { side: "left", text: "Ishu kiss me , Ishu shall we kiss? ❤️", time: "Little things matter" },
    { side: "right", text: "I am pagal for you , I am pagal for you too bujji. ♡", time: "My promise" },
    { side: "left", text: "I will marry you , you are my husband. ❤️", time: "Every single time" },
    { side: "right", text: "Bujji see the pic does it remind you of something , BTW Happppyyyy Birthdaaaayyyyy Loveeeee. 🌙❤️", time: "Until next time" }
];

function addMessageCards() {
    const left = document.getElementById("leftMessages");
    const right = document.getElementById("rightMessages");

    messages.forEach((message, index) => {
        const card = document.createElement("article");
        card.className = "message-card";

        const text = document.createElement("p");
        text.textContent = message.text;

        const time = document.createElement("small");
        time.textContent = message.time;

        card.append(text, time);
        (message.side === "left" ? left : right).appendChild(card);

        // Reveal cards one by one for a gentle scrapbook effect.
        setTimeout(() => card.classList.add("visible"), 180 + index * 130);
    });
}

document.addEventListener("DOMContentLoaded", addMessageCards);
