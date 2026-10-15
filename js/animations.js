
/* =====================================
   SCROLL REVEAL ANIMATIONS
   ===================================== */

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-reveal]");

  if (!elements.length) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => {
      element.classList.add("is-visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    }
  );

  elements.forEach((element) => {
    element.classList.add("will-reveal");
    observer.observe(element);
  });
});
