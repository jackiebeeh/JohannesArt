// Scroll one page with button press
if (document.title === "Johannes") {
    let arrow = document.querySelector(".arrow");
    let pages = document.querySelectorAll(".pages");
    let frontPage = document.querySelector(".frontPage");
    let currentScroll = window.scrollY;

    arrow.addEventListener("click", () => {
        if (window.scrollY === 0 || window.scrollY < 600) {
            window.scroll({
                top: 600,
                left: 0,
                behavior: "smooth",
            });
        }
        else {
            window.scroll({
                top: window.scrollY + 760,
                left: 0,
                behavior: "smooth",
            });
        }
        currentScroll = window.scrollY;
    })
}

// Window on load events:
let loader = document.getElementById("loader-page");

function onPageLoad(){
    console.log(`%cJohannes Art`, `font-family: "EspressoBold"; font-size: 30px`);
    console.log(`%cThis tool is only meant for developers!`, `font-family: "Arbutus Slab"; font-size: 20px; color: orange`);
    loader.classList.add("loaded");
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000);
}
window.onload = () => {
    setTimeout(onPageLoad, 1000);
}

