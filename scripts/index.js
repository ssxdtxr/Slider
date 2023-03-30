const panels = document.getElementsByClassName("panel")

for (let i = 0; i < panels.length; i++) {
    panels[i].addEventListener("click", () => {
        removeActive();

        panels[i].classList.add("active");
    })
}

const removeActive = () => {
    for (let i = 0; i < panels.length; i++) {
        panels[i].classList.remove("active");
    }
}
