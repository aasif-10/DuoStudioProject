// LOCOMOTIVE SMOOTH SCROLLING

function init() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
init();

// GSAP SCROLL TRIGGERS

gsap.to(".page-1 h1", {
  x: -120,
  scrollTrigger: {
    trigger: ".page-1 h1",
    scroller: ".main",
    // markers: true,
    start: "top 30%",
    end: "top -15%",
    scrub: 1.5,
  },
});

gsap.to(".page-1 h2", {
  x: 120,
  scrollTrigger: {
    trigger: ".page-1 h2",
    scroller: ".main",
    // markers: true,
    start: "top 38%",
    end: "top 0%",
    scrub: 1.5,
  },
});

gsap.from(".page-1 h1", {
  y: 180,
  opacity: 0,
  rotate: 10,
  duration: 1,
  ease: "power3.out",
  delay: 0.3,
});
gsap.from(".page-1 h2", {
  y: 180,
  opacity: 0,
  rotate: 10,
  duration: 1,
  ease: "power3.out",
  delay: 0.3,
});

gsap.to("video", {
  width: "95%",

  duration: 2,
  scrollTrigger: {
    trigger: "video",
    scroller: ".main",
    // markers: true,
    start: "top 70%",
    end: "top 20%",
    scrub: 0.5,
  },
});

gsap.from(".page-2 h1,.page-2-left,.page-2-right", {
  y: 125,
  opacity: 0,
  rotate: 10,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".page-2 h1",
    scroller: ".main",
    // markers: true,
    start: "top 55%",
    end: "top 15%",
    scrub: 2,
  },
});

gsap.from(".page-3 h3", {
  y: 125,
  opacity: 0,
  rotate: 10,
  scrollTrigger: {
    trigger: ".page-3",
    scroller: ".main",
    // markers: true,
    start: "top 55%",
    end: "top 15%",
    scrub: 2,
  },
});

gsap.from("#page3-img1", {
  y: 125,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3-img1",
    scroller: ".main",
    // markers: true,
    start: "top 55%",
    end: "top 10%",
    scrub: 2,
  },
});
gsap.from("#page3-img2", {
  y: 125,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3-img2",
    scroller: ".main",
    // markers: true,
    start: "top 55%",
    end: "top 10%",
    scrub: 2,
  },
});
gsap.from("#page3-vdo1", {
  y: 125,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3-vdo1",
    scroller: ".main",
    // markers: true,
    start: "top 65%",
    end: "top 15%",
    scrub: 2,
  },
});
gsap.from("#page3-vdo2", {
  y: 125,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3-vdo2",
    scroller: ".main",
    // markers: true,
    start: "top 65%",
    end: "top 15%",
    scrub: 2,
  },
});

gsap.to("#p1", {
  left: 40,

  scrollTrigger: {
    trigger: ".vdo",
    scroller: ".main",
    start: "top 47%",
    end: "top 10%",
    scrub: 0.5,
  },
});
gsap.to("#p2", {
  right: 40,

  scrollTrigger: {
    trigger: ".vdo",
    scroller: ".main",
    start: "top 47%",
    end: "top 10%",
    scrub: 0.5,
  },
});

gsap.from(".project h2", {
  y: 125,
  opacity: 0,
  rotate: 10,
  scrollTrigger: {
    trigger: ".project",
    scroller: ".main",
    // markers: true,
    start: "top 55%",
    end: "top 35%",
    scrub: 2,
  },
});

gsap.from(".page-4 .text h1", {
  y: 125,
  opacity: 0,
  rotate: 10,
  scrollTrigger: {
    trigger: ".page-4",
    scroller: ".main",
    // markers: true,
    start: "top 75%",
    end: "top 45%",
    scrub: 1,
  },
});

gsap.from(".page-5 h2", {
  y: 125,
  opacity: 0,
  rotate: 10,
  scrollTrigger: {
    trigger: ".page-5",
    scroller: ".main",
    // markers: true,
    start: "top 55%",
    end: "top 35%",
    scrub: 1,
  },
});

gsap.from("#b1,#b2,#b3,#b4,#b5", {
  y: 125,
  opacity: 0,
  scrollTrigger: {
    trigger: ".boxes",
    scroller: ".main",
    start: "top 60%",
    end: "top 45%",
    scrub: 1,
  },
});

gsap.from(".footer", {
  yPercent: 46,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".page-5",
    scroller: ".main",
    // markers: true,
    start: "bottom 40%", // starts just before footer enters
    end: "top -10%", // ends when a bit of it is visible
    scrub: 1,
  },
});

let bgColorTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".page-2", // Start transition from here
    scroller: ".main",
    start: "top 50%",
    endTrigger: ".page-4", // End transition at .page-4
    end: "top 90%",
    scrub: 1,
    // markers: true,
  },
});

gsap.from(".footer-start h2,.footer-para p, .footer-end-content p", {
  y: 125,
  opacity: 0,
  rotate: 10,
  scrollTrigger: {
    trigger: ".footer",
    scroller: ".main",
    // markers: true,
    start: "top 75%",
    end: "top 45%",
    scrub: 1,
  },
});
gsap.from(".footer-circle", {
  y: 125,
  opacity: 0,
  scrollTrigger: {
    trigger: ".footer",
    scroller: ".main",
    // markers: true,
    start: "top 75%",
    end: "top 45%",
    scrub: 1,
  },
});

bgColorTimeline
  .to(".main", { backgroundColor: "#fff" }) // turns white in page-2
  .to(".main", { backgroundColor: "black", color: "#fff", delay: 2 }); // turns black in page-4

let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x - 10 + "px";
  cursor.style.top = dets.y - 10 + "px";
});

let video = document.querySelector("video");
video.addEventListener("mouseenter", function () {
  cursor.innerHTML = "SOUND ON";
  cursor.style.whiteSpace = "nowrap";
  cursor.style.fontSize = "8.5px";
  cursor.style.fontWeight = " 600";
  cursor.style.padding = "4px 5px";
  cursor.style.width = "60px";
  cursor.style.height = "18px";
  cursor.style.borderRadius = "14px";
});

video.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  cursor.style.width = "20px";
  cursor.style.height = "20px";
  cursor.style.borderRadius = "50%";
});

let boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    let att = elem.getAttribute("data-image");
    cursor.style.width = "370px";
    cursor.style.height = "270px";
    cursor.style.borderRadius = "0";
    cursor.style.backgroundImage = `url(${att})`;
  });

  elem.addEventListener("mouseleave", function () {
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    elem.style.backgroundColor = "transparent";
    cursor.style.backgroundImage = `none`;
    cursor.style.borderRadius = "50%";
  });
});

let navLinks = document.querySelectorAll(".nav-links h4");
let navArray = Array.from(navLinks);
navArray.shift();
navArray.forEach(function (elem, index) {
  elem.addEventListener("mouseenter", function () {
    let purpleContainer = document.querySelector(`.purple-1`);
    let purpleScroll = document.querySelector(`#purple-content-${index}`);
    purpleContainer.style.opacity = "1";
    purpleContainer.style.pointerEvents = "visible";
    purpleScroll.style.opacity = "1";
  });

  elem.addEventListener("mouseleave", function () {
    let purpleContainer = document.querySelector(`.purple-1`);
    let purpleScroll = document.querySelector(`#purple-content-${index}`);
    purpleContainer.style.opacity = "0";
    purpleContainer.style.pointerEvents = "none";
    purpleScroll.style.opacity = "0";
  });
});

let circle = document.querySelector(".circle");
circle.addEventListener("mouseenter", function () {
  let purpleContainer = document.querySelector(`.purple`);
  let purpleScroll = document.querySelector(`#circle-purple`);
  purpleContainer.style.opacity = "1";
  // purpleContainer.style.pointerEvents = "visible";
  purpleScroll.style.opacity = "1";
});

circle.addEventListener("mouseleave", function () {
  let purpleContainer = document.querySelector(`.purple`);
  let purpleScroll = document.querySelector(`#circle-purple`);
  purpleContainer.style.opacity = "0";
  // purpleContainer.style.pointerEvents = "none";
  purpleScroll.style.opacity = "0";
});
