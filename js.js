const about = document.querySelector("#about");
const home = document.querySelector("#home");
const education = document.querySelector("#edu");
const skill = document.querySelector("#skill");
const contact = document.querySelector("#con");


about.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior if using <a>
    const aboutSection = document.getElementById("about-page");
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    }
});

home.addEventListener("click", function(event) {
    console.log("clicked")

    event.preventDefault(); // Prevent default link behavior if using <a>
    const homeSection = document.querySelector(".main");
    if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
    }
});
education.addEventListener("click", function(event) {
    console.log("clicked")

    event.preventDefault(); // Prevent default link behavior if using <a>
    const homeSection = document.querySelector(".education");
    if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
    }
});
skill.addEventListener("click", function(event) {
    console.log("clicked")

    event.preventDefault(); // Prevent default link behavior if using <a>
    const homeSection = document.querySelector(".skill");
    if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
    }
});
contact.addEventListener("click", function(event) {
    console.log("clicked")

    event.preventDefault(); // Prevent default link behavior if using <a>
    const homeSection = document.querySelector(".contact");
    if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
    }
});

//GSAP
var tl = gsap.timeline()
    // timline is used for animate one part then after another
    // tl.from(".header h1,.navbar", {
    //     y: -50,
    //     delay: .2,
    //     duration: .5,
    //     stagger: .5,
    //     opacity: 0,

// })
tl.from(".header h1,.navbar", {
    y: -50,
    delay: .2,
    duration: .5,
    stagger: .5,
    opacity: 0,

})
tl.from(".im h2,.im p", {
    x: -700,
    stagger: .2,
    duration: .4,
})
gsap.from(".img", {
        x: 500,
        delay: 2.2,
        opacity: 0,
        duration: .5,
    })
    // gsap.from("#btn1" {
    //     y: -50,
    //     opacity: 0,
    //     duration: .2,
    // })

gsap.from("#about-page h1,#about-page p", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: "#about-page h1,#about-page p",
        scroller: "body",
        start: "top 60%",
        end: "top 10%",
        scrub: 1,


    }
})

tl.from("#education h1, .box ", {
    y: 100,
    opacity: 0,
    stagger: .1,
    scrollTrigger: {
        trigger: "#education h1, .box",
        scroller: "body",
        start: "top 50%",
        end: "top 70%",
        scrub: 1,
    }
})
tl.from(".skill h1,#box", {
    y: 100,
    opacity: 0,
    stagger: .1,
    scrollTrigger: {
        trigger: ".skill h1,#box",
        scroller: "body",
        start: "top 50%",
        end: "top 70%",
        scrub: 1,
    }
})
tl.from(".contact h1,#contact", {
    y: 100,
    opacity: 0,
    stagger: .1,
    scrollTrigger: {
        trigger: ".contact h1,#contact",
        scroller: "body",
        start: "top 50%",
        end: "top 70%",
        scrub: 1,
    }
})