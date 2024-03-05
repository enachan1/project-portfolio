const mobileNav = () => {
    const navigationButton = document.querySelector("#bars");
    const mobileNavStyle = document.querySelector(".mobile_nav");
    const x_btn = document.querySelector("#x-btn");
    const fadeAnimation = document.querySelector(".mobile-fade");
    const links = document.querySelectorAll(".mobile_nav-link");

    let isAnimated = false;

    navigationButton.addEventListener('click', () => {
        isAnimated = !isAnimated;

        if(isAnimated) {
            mobileNavStyle.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
            fadeAnimation.classList.toggle('tog-anim-fadeIn');
            fadeAnimation.classList.remove('tog-anim-fadeOut');
        }

    });

    x_btn.addEventListener('click', () => {
        isAnimated = !isAnimated;

        mobileNavStyle.style.display = 'none';
        document.body.style.overflowY = 'visible';

        if(!isAnimated) {
            fadeAnimation.classList.remove('tog-anim-fadeIn');
            fadeAnimation.classList.toggle('tog-anim-fadeOut');
        }
            
    });

    links.forEach(link => {
        link.addEventListener("click", ()=> {
            isAnimated = !isAnimated;

            if(!isAnimated) {
                fadeAnimation.classList.remove('tog-anim-fadeIn');
                fadeAnimation.classList.toggle('tog-anim-fadeOut');
                
                mobileNavStyle.style.display = 'none';
                document.body.style.overflowY = 'visible';
            }
        })
    })
}

export default mobileNav;