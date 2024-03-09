const fade_lazyLoad = () => {
    const animate = document.querySelectorAll(".anim1");

    try {
        const intersect = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.toggle("fade-anim");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0
        });

        animate.forEach(animText => {
            intersect.observe(animText);
        });
    } catch (ex) {
        console.log(ex);
    }
};

export default fade_lazyLoad;
