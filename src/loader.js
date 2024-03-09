const loader = () => {
    const loads = document.querySelector(".loader");
    const animate = document.querySelector(".load_animate");
    
    window.addEventListener("load", () => {
            loads.style.display = "none";
            document.body.style.overflowY = "visible";
            animate.classList.toggle("animateLoad");
    });
}
export default loader;