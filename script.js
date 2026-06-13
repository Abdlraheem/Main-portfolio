document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, SplitText, TextPlugin);
  // gsap code here!
  document.fonts.ready.then(() => {
    let splitName = SplitText.create(".name", {
      type: "chars",
    });
    let splitAbout = SplitText.create(".about-summury", {
      type: "lines",
    });
    let splitSkills = SplitText.create(".skills-about", {
      type: "lines",
    });

    gsap.from(splitName.chars, {
      y: 100,
      autoAlpha: 0,
      stagger: {
        amount: 1,
        from: "random",
      },
    });
  });
  gsap.from(".about", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".about",
      start: " 96%",
      scrub: 1,
      end: "100% 80%",
    },
  });
  gsap.from(".skills", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".skills",
      start: " 96%",
      scrub: 1,
      end: "100% 80%",
    },
  });
  gsap.from("#experience-title", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: "#experience-title",
      start: " 96%",
      scrub: 1,
      end: "100% 80%",
    },
  });
  gsap.from(".experience-details", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".experience-details",
      start: " 96%",
      scrub: 1,
      end: "100% 80%",
    },
  });
  gsap.from(".experience-text", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".experience-text",
      start: " 86%",
      scrub: 1,
      end: "100% 80%",
    },
  });
  gsap.from(".contact", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".contact",
      start: " 86%",
      scrub: 1,
      end: "100% 80%",
    },
  });
});
