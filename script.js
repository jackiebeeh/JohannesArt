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

// Window on load load events:
let loader = document.getElementById("loader-page");

function onPageLoad(){
    console.log(`%cJOHANNES ART`, `font-family: "BonvenoCF"; font-size: 30px`);
    console.log(`%cThis tool is only meant for developers!`, `font-family: "Arbutus Slab"; font-size: 20px; color: orange`);
    loader.classList.add("loaded");
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000);
}
window.onload = () => {
    updateButton({button: lightButton, isDark: currentThemeSetting === "dark"});
    updateHtmlTheme({theme: currentThemeSetting});
    setTimeout(onPageLoad, 1000);
}

// Change webpage theme to light or dark:
const lightButton = document.querySelector(".lightButton");
const buttonTheme = sessionStorage.getItem("theme");
let systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
let systemSettingLight = window.matchMedia("(prefers-color-scheme: light)");
let currentThemeSetting = getTheme({ buttonTheme, systemSettingDark });
let currentSystemSetting;

function getSystemSetting() {
    if (systemSettingDark.matches) {
        return "dark";
    }
    if (systemSettingLight.matches) {
        return "light";
    }
    return "null";
}
function getTheme({buttonTheme, systemSettingDark}) {
    if (buttonTheme !== "undefined" && buttonTheme !== null) {
        return buttonTheme;
    }
    if (systemSettingDark.matches) {
        return "dark";
    }
    if (systemSettingLight.matches) {
        return "light";
    }
    return "dark";
}
function updateButton ({button, isDark}) {
    let newContent = isDark ? "ON" : "OFF";
    button.innerText = newContent;
    button.setAttribute("aria-label", `Turn light "${newContent}"`);
    button.setAttribute("title", `Turn light ${newContent}`);
}
function updateHtmlTheme({theme}) {
    document.querySelector("html").setAttribute("data-theme", theme);
}
function changeTheme() {
    let newTheme = currentThemeSetting === 
    "dark" ? "light": "dark";
    updateButton({button: lightButton, 
        isDark: newTheme === "dark" });
    updateHtmlTheme({theme: newTheme});
    sessionStorage.setItem("theme", newTheme);
    currentThemeSetting = newTheme;
}

// listen to button clicks
lightButton.addEventListener("click", () => {
    changeTheme();
});

// Listen for user system setting theme changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    currentSystemSetting = getSystemSetting();
    if (currentSystemSetting === currentThemeSetting) {
        return;
    }
    changeTheme();
});

window.addEventListener("mousemove", (e) => {
    console.log(e.target);
})