gsap.registerPlugin(ScrollTrigger);const containerInner=document.querySelector(".container-inner"),visualSection=document.querySelector(".visual-section"),contentsSection=document.querySelector(".contents-section"),intro=contentsSection.querySelector(".intro"),visualTitle=contentsSection.querySelector(".visual-title-wrap"),titleNo=visualTitle.querySelector(".title-no"),titleCode=visualTitle.querySelector(".title-code"),project=contentsSection.querySelector(".project-list"),bubble=project.querySelector(".bubble"),bubbleLogoArea=bubble.querySelector(".logo-area"),bubbleLogo=bubble.querySelector(".logo"),glide=project.querySelector(".glide"),glideLogoArea=glide.querySelector(".logo-area"),glideLogo=glide.querySelector(".logo"),softr=project.querySelector(".softr"),softrLogoArea=softr.querySelector(".logo-area"),softrLogo=softr.querySelector(".logo"),webFlow=project.querySelector(".webflow"),webFlowLogoArea=webFlow.querySelector(".logo-area"),webFlowLogo=webFlow.querySelector(".logo"),storybook=project.querySelector(".storybook"),storybookLogoArea=storybook.querySelector(".logo-area"),storybookLogo=storybook.querySelector(".logo");var currentScroll=window.scrollY;const anchorList=document.querySelector(".anchor-list"),anchorButton=anchorList.querySelectorAll("button");anchorButton.forEach(o=>{o.addEventListener("click",function(){let e=o.dataset.anchor;project.querySelectorAll(".project-item").forEach(o=>{e==o.dataset.anchor&&window.scrollTo({top:o.offsetTop,behavior:"smooth"})})})}),gsap.set(visualTitle,{transform:"translateY(-190%)"}),gsap.to(visualTitle,{scrollTrigger:{trigger:intro,start:"top bottom",end:"50% bottom",scrub:!0}}),gsap.to(visualTitle,{scrollTrigger:{trigger:intro,pin:visualTitle,start:"-=80% top",end:"top+=30% top",scrub:!0}}),gsap.to(containerInner,{scrollTrigger:{trigger:intro,start:"-=80% top",end:"50% bottom",scrub:!0},backgroundColor:"#F2F2F2"}),gsap.to(titleNo,{scrollTrigger:{trigger:intro,start:"-=80% top",end:"50% bottom",scrub:!0},color:"#0D0D0D"}),gsap.to(titleNo,{scrollTrigger:{trigger:intro,start:"top bottom",end:"60% bottom",scrub:!0},fontSize:"215px"}),gsap.to(titleCode,{scrollTrigger:{trigger:intro,start:"top bottom",end:"60% bottom",scrub:!0},top:"60%",left:"10%",fontSize:"62px"}),gsap.to(bubbleLogo,{scrollTrigger:{trigger:bubbleLogoArea,pin:bubbleLogoArea,start:"top top",end:"top+=200% top",scrub:.5},ease:"power4.in",transform:"translate(3575%, -80%) scale(200)"}),gsap.to(softrLogo,{scrollTrigger:{trigger:softrLogoArea,pin:softrLogoArea,start:"top top",end:"top+=200% top",scrub:.5},ease:"power4.in",transform:"translate(0, 3000%) scale(200)"}),gsap.to(webFlowLogo,{scrollTrigger:{trigger:webFlowLogoArea,pin:webFlowLogoArea,start:"top top",end:"top+=200% top",scrub:.5},ease:"power4.in",transform:"translate(0, 5000%) scale(200)"}),gsap.to(glideLogo,{scrollTrigger:{trigger:glideLogoArea,pin:glideLogoArea,start:"top top",end:"top+=200% top",scrub:.5},ease:"power4.in",transform:"translate(-1000%, -1000%) scale(200)"}),gsap.to(storybookLogo,{scrollTrigger:{trigger:storybookLogoArea,pin:storybookLogoArea,start:"top top",end:"top+=200% top",scrub:.5},ease:"power4.in",transform:"translate(0, 0%) scale(250)"});