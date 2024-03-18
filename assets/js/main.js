
gsap.registerPlugin(ScrollTrigger) 

const containerInner = document.querySelector('.container-inner')
const visualSection = document.querySelector('.visual-section')
const contentsSection = document.querySelector('.contents-section')
const intro = contentsSection.querySelector('.intro')
const visualTitle = contentsSection.querySelector('.visual-title-wrap')
const titleNo = visualTitle.querySelector('.title-no')
const titleCode = visualTitle.querySelector('.title-code')
const project = contentsSection.querySelector('.project-list')
const bubble = project.querySelector('.bubble')
const bubbleLogoArea = bubble.querySelector('.logo-area')
const bubbleLogo = bubble.querySelector('.logo')
const glide = project.querySelector('.glide')
const glideLogoArea = glide.querySelector('.logo-area')
const glideLogo = glide.querySelector('.logo')
const softr = project.querySelector('.softr')
const softrLogoArea = softr.querySelector('.logo-area')
const softrLogo = softr.querySelector('.logo')
const webFlow = project.querySelector('.webflow')
const webFlowLogoArea = webFlow.querySelector('.logo-area')
const webFlowLogo = webFlow.querySelector('.logo')
const storybook = project.querySelector('.storybook')
const storybookLogoArea = storybook.querySelector('.logo-area')
const storybookLogo = storybook.querySelector('.logo')
var currentScroll = window.scrollY

const anchorList = document.querySelector('.anchor-list')
const anchorButton = anchorList.querySelectorAll('button')

anchorButton.forEach(element => {
    element.addEventListener('click', function() {
        let data = element.dataset.anchor
        const anchorContents = project.querySelectorAll('.project-item')
        anchorContents.forEach(item => {
            if(data == item.dataset.anchor) {
                window.scrollTo({top: item.offsetTop, behavior: "smooth"})
            }
        });
    })
});



gsap.set(visualTitle, {
    transform: "translateY(-190%)"
})
gsap.to(visualTitle, {
    scrollTrigger: {
        trigger: intro,
        start: "top bottom",
        end: "50% bottom",
        scrub: true,
    },
})
gsap.to(visualTitle, {
    scrollTrigger: {
        trigger: intro,
        pin: visualTitle,
        start: "-=80% top",
        end: "top+=30% top",
        scrub: true,
    },
})
gsap.to(containerInner, {
    scrollTrigger: {
        trigger: intro,
        start: "-=80% top",
        end: "50% bottom",
        scrub: true,
    },
    backgroundColor: "#F2F2F2"
})
gsap.to(titleNo, {
    scrollTrigger: {
        trigger: intro,
        start: "-=80% top",
        end: "50% bottom",
        scrub: true,
    },
    color: "#0D0D0D"
})

gsap.to(titleNo, {
    scrollTrigger: {
        trigger: intro,
        start: "top bottom",
        end: "60% bottom",
        scrub: true,
    },
    fontSize: "215px"
})

gsap.to(titleCode, {
    scrollTrigger: {
        trigger: intro,
        start: "top bottom",
        end: "60% bottom",
        scrub: true,
    },
    top: "60%",
    left: "10%",
    fontSize: "62px"
})

gsap.to(bubbleLogo,{
    scrollTrigger: {
        trigger: bubbleLogoArea,
        pin: bubbleLogoArea,
        start: "top top",
        end: "top+=200% top",
        scrub: 0.5,
    },
    ease: "power4.in",
    transform: "translate(3575%, -80%) scale(200)"
})

gsap.to(glideLogo,{
    scrollTrigger: {
        trigger: glideLogoArea,
        pin: glideLogoArea,
        start: "top top",
        end: "top+=200% top",
        scrub: 0.5,
    },
    ease: "power4.in",
    transform: "translate(-1000%, -1000%) scale(200)"
})

gsap.to(softrLogo,{
    scrollTrigger: {
        trigger: softrLogoArea,
        pin: softrLogoArea,
        start: "top top",
        end: "top+=200% top",
        scrub: 0.5,
    },
    ease: "power4.in",
    transform: "translate(0, 3000%) scale(200)"
})
gsap.to(webFlowLogo,{
    scrollTrigger: {
        trigger: webFlowLogoArea,
        pin: webFlowLogoArea,
        start: "top top",
        end: "top+=200% top",
        scrub: 0.5,
    },
    ease: "power4.in",
    transform: "translate(0, 5000%) scale(200)"
})

gsap.to(storybookLogo,{
    scrollTrigger: {
        trigger: storybookLogoArea,
        pin: storybookLogoArea,
        start: "top top",
        end: "top+=200% top",
        scrub: 0.5,
    },
    ease: "power4.in",
    transform: "translate(0, 0%) scale(250)"
})

