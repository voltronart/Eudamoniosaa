const playMusicBtn = document.getElementById("playMusicBtn");
const bgMusic = document.getElementById("bgMusic");
const scrollToBook = document.getElementById("scrollToBook");
const bookSection = document.getElementById("bookSection");
const horizontalBook = document.getElementById("horizontalBook");

let tocando = false;

playMusicBtn.addEventListener("click", () => {
    if (!tocando) {
        bgMusic.play();
        playMusicBtn.textContent = "❚❚ Pausar trilha";
        tocando = true;
    } else {
        bgMusic.pause();
        playMusicBtn.textContent = "▶ Ouvir trilha";
        tocando = false;
    }
});

scrollToBook.addEventListener("click", () => {
    bookSection.scrollIntoView({ behavior: "smooth" });
});

horizontalBook.addEventListener("wheel", (e) => {
    e.preventDefault();
    horizontalBook.scrollLeft += e.deltaY;
}, { passive: false });