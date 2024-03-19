
export function hideLoadScreen() {
    const loadScreen = document.querySelector(".loadScreen");
    if (loadScreen) {
        loadScreen.classList.add("loadScreen--hidden");
        loadScreen.addEventListener("transitionend", () => {
            if (loadScreen.parentNode) {
                loadScreen.parentNode.removeChild(loadScreen);
            }
        });
    }
}

