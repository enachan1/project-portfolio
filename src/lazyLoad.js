const lazyLoad = () => {
    const animate = document.querySelectorAll(".anim");

    try {
        const intersect = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.toggle("animate-mask");
                    observer.unobserve(entry.target);
                }
            });
        });

        animate.forEach(animText => {
            intersect.observe(animText);
        });
    } catch (ex) {
        console.log(ex);
    }
};

export default lazyLoad;
