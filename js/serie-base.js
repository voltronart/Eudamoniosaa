document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");

    const detailHeader = document.getElementById("detailHeader");
    const reveals = document.querySelectorAll(".reveal");
    const cinemaTransition = document.getElementById("cinemaTransition");
    const openBookBtn = document.getElementById("openBookBtn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            detailHeader.classList.add("header-scrolled");
        } else {
            detailHeader.classList.remove("header-scrolled");
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    }, {
        threshold: 0.18
    });

    reveals.forEach((element) => observer.observe(element));

    if (openBookBtn && cinemaTransition) {
        openBookBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const targetHref = openBookBtn.getAttribute("href");

            cinemaTransition.classList.add("active");

            setTimeout(() => {
                window.location.href = targetHref;
            }, 700);
        });
    }
});