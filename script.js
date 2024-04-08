// Photo pages script
let ImagesList = [
    { 
        src: "./images/OpenAI01.jpeg",
        info: "Some info about the artwork"
    },
    { 
        src: "./images/OpenAI02.jpeg",
        info: "Some info about the artwork"
    },
    { 
        src: "./images/OpenAI03.jpeg",
        info: "Some info about the artwork"
    },
    { 
        src: "./images/OpenAI04.jpeg",
        info: "Some info about the artwork"
    },
    { 
        src: "./images/OpenAI05.jpeg",
        info: "Some info about the artwork"
    },
    { 
        src: "./images/OpenAI06.jpeg",
        info: "Some info about the artwork"
    },
    { 
        src: "./images/OpenAI07.jpeg",
        info: "Some info about the artwork"
    },
    { 
        src: "./images/OpenAI08.jpeg",
        info: "Some info about the artwork"
    },
    { 
        src: "./images/OpenAI09.jpeg",
        info: "Some info about the artwork"
    },
    { 
        src: "./images/OpenAI10.jpeg",
        info: "Some info about the artwork"
    },
    { 
        src: "./images/OpenAI11.jpeg",
        info: "Some info about the artwork"
    },
    { 
        src: "./images/OpenAI12.jpeg",
        info: "Some info about the artwork"
    },
    { 
        src: "./images/OpenAI13.jpeg",
        info: "Some info about the artwork"
    },
    { 
        src: "./images/OpenAI14.jpeg",
        info: "Some info about the artwork"
    },
    { 
        src: "./images/OpenAI15.jpeg",
        info: "Some info about the artwork"
    }
];

let imagePages = document.querySelector(".imagePages");
ImagesList.forEach((image) => {
    let newPage = document.createElement("div");
    newPage.classList.add("pages");
    newPage.innerHTML = (
    `<div class="imageContainer">
            <div class="image">
                <img src=${image.src}>
            </div>
            <div class="imageInfo">
                ${image.info}
            </div>
        </div>`
    )
    imagePages.appendChild(newPage);
});

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

