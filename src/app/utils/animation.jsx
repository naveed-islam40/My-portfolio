import gsap from "gsap";

export const animationPageIn = () => {
    const bannerOne = document.getElementById("banner1")
    const bannerTwo = document.getElementById("banner2")
    const bannerThree = document.getElementById("banner3")
    const bannerFour = document.getElementById("banner4")

    if (bannerOne && bannerTwo && bannerThree && bannerFour) {
        const tl = gsap.timeline()

        tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent:0,
        }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: 100,

            stagger: 0.2
        })
    }
}